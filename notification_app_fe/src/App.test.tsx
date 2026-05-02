import { render, screen } from '@testing-library/react';
import App from './App';

test('renders campus hub header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Campus Hub/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders section titles', () => {
  render(<App />);
  const allNotificationsHeader = screen.getByText(/All Notifications/i);
  expect(allNotificationsHeader).toBeInTheDocument();
});
