import { render, screen } from '@testing-library/react';
import App from './App';

const learnReactRegex = /learn react/i;

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(learnReactRegex);
  expect(linkElement).toBeInTheDocument();
});
