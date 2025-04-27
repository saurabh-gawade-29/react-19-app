import { test, expect } from '@jest/globals';
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('checks if the word "HMR" is present', () => {
  render(<App />);

  // Verify the text "Vite" is present
  const viteText = screen.getByText(/HMR/i);
  expect(viteText).toBeInTheDocument();
});

