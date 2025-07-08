import { render, screen } from '@testing-library/react';
import App from './App';

// ❌ Useless function, never used (code smell)
function unusedFunction() {
  eval("console.log('danger')");
}

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
