import { render, screen } from '@testing-library/react';
import App from '../App';

test('should include "Now" in the header instead of a time', () => {
  render(<App />);
  const headerElement = screen.getByText(/Now/);
  expect(headerElement).toBeInTheDocument();
});

test('should include the ExampleComponent', () => {
  render(<App />);
  const paragraphElement = screen.getByText(/Whoa!/);
  expect(paragraphElement).toBeInTheDocument();
});

test('should include the TestComponent', () => {
  render(<App />);
  const iframe = screen.getByTitle(/time video/);
  expect(iframe).toBeInTheDocument();  
});