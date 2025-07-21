// src/App.tsx
import React, { useState } from 'react';
import { Container, Typography, Paper } from '@mui/material';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import type { Todo } from '../types/todo';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      complete: false, // ✅ this matches your Todo type
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(#e66465, #9198e5)',
        display: 'flex',
        justifyContent: 'center',
      }}>
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper 
        elevation={6}
        sx={{
          p: 3,
          borderRadius: 5,
          backgroundColor: '#ffffff',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.18)',
        }}>
        <Typography variant="h2" align="center" gutterBottom 
        sx={{fontSize:"3rem", fontWeight:500}}>
          Things ToDo
        </Typography>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      </Paper>
    </Container>
    </div>
  );
};

export default App;
