import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {

  test('renders Task Manager title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Task Manager/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('adds a new task', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/Add task.../i);
    const addButtonElement = screen.getByText(/Add Task/i);

    fireEvent.change(inputElement, { target: { value: 'Test Task' } });
    fireEvent.click(addButtonElement);

    const taskElement = screen.getByText(/Test Task/i);
    expect(taskElement).toBeInTheDocument();
  });

  test('tasks persist to local storage', () => {
    localStorage.clear();

    const { unmount } = render(<App />);
    const inputElement = screen.getByPlaceholderText(/Add task.../i);
    const addButtonElement = screen.getByText(/Add Task/i);

    fireEvent.change(inputElement, { target: { value: 'Persistent Task' } });
    fireEvent.click(addButtonElement);

    unmount();

    render(<App />);
    const taskElement = screen.getByText(/Persistent Task/i);
    expect(taskElement).toBeInTheDocument();
  });
});
