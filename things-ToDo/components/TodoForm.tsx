import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface TodoFormProps {
  addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" gap={2} mt={2}>
        <TextField
          label="New Task"
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Add
        </Button>
      </Box>
    </form>

  );
};

export default TodoForm;
