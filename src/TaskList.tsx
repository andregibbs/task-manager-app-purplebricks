// TaskList.tsx
import React from 'react';
import TaskItem from './TaskItem';
import { Task } from './types';
import * as Styled from './styles';

interface TaskListProps {
  tasks: Task[];
  onTaskComplete: (id: number) => void;
  onDeleteTask: (id: number) => void;
  onEditTask: (id: number, updatedTask: Task) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskComplete, onDeleteTask, onEditTask }) => {
  return (
    <Styled.List>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onTaskComplete={onTaskComplete}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
        />
      ))}
    </Styled.List>
  );
};

export default TaskList;
