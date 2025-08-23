import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import TodoList from '../TodoList'

test('renders initial todos', () => {
  render(<TodoList />)
  expect(screen.getByText('Learn React')).toBeInTheDocument()
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument()
})

test('adds a new todo', () => {
  render(<TodoList />)
  
  const input = screen.getByPlaceholderText('Add a new todo')
  fireEvent.change(input, { target: { value: 'Write tests' } })
  fireEvent.click(screen.getByText('Add'))
  
  expect(screen.getByText('Write tests')).toBeInTheDocument()
})

test('toggles a todo', () => {
  render(<TodoList />)
  
  const todoItem = screen.getByText('Learn React')
  fireEvent.click(todoItem)
  
  expect(todoItem).toHaveStyle('text-decoration: line-through')
})

test('deletes a todo', () => {
  render(<TodoList />)
  
  const deleteButton = screen.getAllByText('Delete')[0]
  fireEvent.click(deleteButton)
  
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument()
})
