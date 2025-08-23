import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App';

describe('Todo List Component', () => {

  test('renders the initial list of todos', () => {
    render(<App />);
    const todo1 = screen.getByText('Learn React');
    const todo2 = screen.getByText('Build a Todo List');
    expect(todo1).toBeInTheDocument();
    expect(todo2).toBeInTheDocument();
  });

  test('allows a user to add a new todo', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Add a new todo.../i);
    const addButton = screen.getByRole('button', { name: /Add/i });
    
    fireEvent.change(input, { target: { value: 'Test new todo' } });
    fireEvent.click(addButton);

    const newTodo = screen.getByText('Test new todo');
    expect(newTodo).toBeInTheDocument();
  });

  test('allows a user to toggle a todo', () => {
    render(<App />);
    const todoItem = screen.getByText('Build a Todo List');
    
    expect(todoItem).not.toHaveClass('line-through');

    fireEvent.click(todoItem);
    expect(todoItem).toHaveClass('line-through');

    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveClass('line-through');
  });

  test('allows a user to delete a todo', () => {
    render(<App />);
    const todoItem = screen.getByText('Write tests');
    const deleteButton = screen.getByRole('button', { name: /Delete Write tests/i });
    
    expect(todoItem).toBeInTheDocument();
    
    fireEvent.click(deleteButton);
    
    expect(todoItem).not.toBeInTheDocument();
  });

});

