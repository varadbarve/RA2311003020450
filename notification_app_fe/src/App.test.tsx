import { render, screen } from '@testing-library/react';
import App from './App';

test('renders brand header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Campus Intelligence/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders feed section titles', () => {
  render(<App />);
  const archiveHeader = screen.getByText(/Archive Feed/i);
  expect(archiveHeader).toBeInTheDocument();
});
