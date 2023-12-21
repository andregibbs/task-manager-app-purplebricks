// App.tsx
import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import { Task } from './types';
import * as Styled from './styles';


const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleTaskComplete = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleAddTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleEditTask = (id: number, updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
    );
  };

  return (
    <Styled.Container>
      <Styled.Title>Task Manager</Styled.Title>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onTaskComplete={handleTaskComplete}
        onDeleteTask={handleDeleteTask}
        onEditTask={handleEditTask}
      />
    </Styled.Container>
  );
};

export default App;
