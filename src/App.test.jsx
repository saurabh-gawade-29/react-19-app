import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// For Jest testing functions
import { test, expect } from '@jest/globals';

// Test for checking if "Vite" is rendered
test('renders the word Vite', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  
  // Check if the word 'Vite' is present in the document
  expect(screen.getByText(/Vite/i)).toBeInTheDocument();
});

// Test for checking if the initial count value is 0
test('renders initial count value', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  
  // Check if the count value is initially 0
  expect(screen.getByText(/count is 0/i)).toBeInTheDocument();
});

// Test for incrementing the count value when the button is clicked
test('increments the count value', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  
  const button = screen.getByText(/count is 0/i);
  
  // Simulate button click to increment the count
  fireEvent.click(button);
  
  // Check if the count is updated to 1
  expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
});
