// src/components/TodoList.tsx
import React from 'react';
import { List } from '@mui/material';
import TodoItem from './TodoItem';
import type { Todo } from '../types/todo';

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo ={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </List>
  );
};

export default TodoList;
