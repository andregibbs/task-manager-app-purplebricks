// TaskItem.tsx
import React, { useState } from 'react';
import { Task } from './types';
import * as Styled from './styles';

interface TaskItemProps {
  task: Task;
  onTaskComplete: (id: number) => void;
  onDeleteTask: (id: number) => void;
  onEditTask: (id: number, updatedTask: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onTaskComplete, onDeleteTask, onEditTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleSaveEdit = () => {
    const updatedTask: Task = {
      ...task,
      title: editedTitle,
      description: editedDescription,
    };
    onEditTask(task.id, updatedTask);
    setIsEditing(false);
  };

  return (
    <Styled.ListItem>
      {!isEditing ? (
        <> 
          <Styled.InputCheckbox
            type="checkbox"
            checked={task.completed}
            onChange={() => onTaskComplete(task.id)}
          />
            <span>{task.title}</span> - <span>{task.description}</span>
          <Styled.ButtonContainer>
            <Styled.Button onClick={() => setIsEditing(true)}>Edit</Styled.Button>
            <Styled.Button onClick={() => onDeleteTask(task.id)}>Delete</Styled.Button>
          </Styled.ButtonContainer>

        </>
      ) : (
        <>
          <Styled.Label>
            Title:
            <Styled.Input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          </Styled.Label>
          <Styled.Label>
            Description:
            <Styled.TextArea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
          </Styled.Label>
          <Styled.ButtonContainer>
          <Styled.Button onClick={handleSaveEdit}>Save</Styled.Button>
          <Styled.Button onClick={() => setIsEditing(false)}>Cancel</Styled.Button>
          </Styled.ButtonContainer>

        </>
      )}
    </Styled.ListItem>
  );
};

export default TaskItem;
