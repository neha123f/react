import { render, screen } from '@testing-library/react';
import App from './App';

// ❌ Unused variable (code smell)
const unused = 42;

test('renders learn react link', () => {
  render(<App />);

  // ❌ Long test name (may be flagged under naming or readability rules)
  const linkElement = screen.getByText(/learn react/i);  
  expect(linkElement).toBeInTheDocument();

  // ❌ Duplicate assertion (redundant code)
  expect(linkElement).toBeInTheDocument();
});

// ❌ Useless empty function (code smell)
function doNothing() {}
