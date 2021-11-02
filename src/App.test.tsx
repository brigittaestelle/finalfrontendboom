import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Home Link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders archive Link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Archives/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Starting Point', () => {
  render(<App />);
  const H1 = screen.getByText(/Starting Point/i);
  expect(H1).toBeInTheDocument();
});

test('renders Pick A Topic', () => {
  render(<App />);
  const searButt = screen.getByText(/Pick A Topic/i);
  expect(searButt).toBeInTheDocument();
});

test('renders Sign Up link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sign Up/i);
  expect(linkElement).toBeInTheDocument();
});

// test('renders Home Link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Home/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders Home Link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Home/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders Home Link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Home/i);
//   expect(linkElement).toBeInTheDocument();
// });