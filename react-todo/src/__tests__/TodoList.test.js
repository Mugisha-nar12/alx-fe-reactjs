import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList', () => {
  it('renders the initial todos', () => {
    const { getByText } = render(<TodoList />);
    expect(getByText('Learn about React')).toBeInTheDocument();
    expect(getByText('Meet friend for lunch')).toBeInTheDocument();
    expect(getByText('Build really cool todo app')).toBeInTheDocument();
  });

  it('adds a new todo', () => {
    const { getByPlaceholderText, getByText } = render(<TodoList />);
    const input = getByPlaceholderText('Add a new todo');
    const addButton = getByText('Add');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    expect(getByText('New Todo')).toBeInTheDocument();
  });

  it('toggles a todo', () => {
    const { getByText } = render(<TodoList />);
    const todoText = getByText('Learn about React');
    const todoItem = todoText.closest('li');

    fireEvent.click(todoText);
    expect(todoItem).toHaveStyle('text-decoration: line-through');

    fireEvent.click(todoText);
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });

  it('deletes a todo', () => {
    const { queryByText, getAllByText } = render(<TodoList />);
    const deleteButtons = getAllByText('Delete');
    fireEvent.click(deleteButtons[0]);
    expect(queryByText('Learn about React')).not.toBeInTheDocument();
  });
});