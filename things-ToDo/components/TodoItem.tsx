// src/components/TodoItem.tsx
import React from 'react';
import { Checkbox, IconButton, ListItem, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import type { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={() => deleteTodo(todo.id)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox
        checked={todo.complete}
        onChange={() => toggleComplete(todo.id)}
      />
      <Typography
        sx={{
          textDecoration: todo.complete ? 'line-through' : 'none',
        }}
      >
        {todo.text}
      </Typography>
    </ListItem>
  );
};

export default TodoItem;
