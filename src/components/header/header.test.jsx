import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import Header from './index';

describe('Header Component', () => {
  test('renders h1 as expected', () => {
    render(<Header />);

    let h1 = screen.getByText('RESTy');
    expect(h1).toBeTruthy();
    expect(h1).toBeInTheDocument();

  });
});