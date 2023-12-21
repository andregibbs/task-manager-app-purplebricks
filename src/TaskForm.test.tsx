import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TaskForm from './TaskForm';

test('renders TaskForm component', () => {
  const mockAddTask = jest.fn();
  render(<TaskForm onAddTask={mockAddTask} />);

  expect(screen.getByText(/Title/i)).toBeInTheDocument();
  expect(screen.getByText(/Description/i)).toBeInTheDocument();

  fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: 'Test Title' } });
  fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'Test Description' } });

  fireEvent.click(screen.getByText(/Add Task/i));

  expect(mockAddTask).toHaveBeenCalledWith({
    id: expect.any(Number),
    title: 'Test Title',
    description: 'Test Description',
    completed: false,
  });

  expect(screen.getByLabelText(/Title/i)).toHaveValue('');
  expect(screen.getByLabelText(/Description/i)).toHaveValue('');
});

