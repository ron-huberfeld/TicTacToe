import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/How About a Little Game of Tic Tac Toe?/i);
  expect(linkElement).toBeInTheDocument();
  const descriptionElement = getByText(/This is a Tic Tac Toe game built with React\./i);
  expect(descriptionElement).toBeInTheDocument();
});
