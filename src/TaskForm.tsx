// TaskForm.tsx
import React, { useState } from 'react';
import { Task } from './types';
import * as Styled from './styles';

interface TaskFormProps {
  onAddTask: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic form validation
    if (!title || !description) {
      setError('Both title and description are required.');
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };
    onAddTask(newTask);
    setTitle('');
    setDescription('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Styled.FormGroup>
        <Styled.Label>
          Title:
          <Styled.Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Styled.Label>
      </Styled.FormGroup>
      <Styled.FormGroup>
        <Styled.Label>
          Description:
          <Styled.TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Styled.Label>
      </Styled.FormGroup>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Styled.Button type="submit">
        Add Task
      </Styled.Button>
    </form>
  );
};

export default TaskForm;
