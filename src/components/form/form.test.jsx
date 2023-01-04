import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import Form from './index';

describe('Form test', () => {
  test('COUNTS when clicked', () => {

    render(<Form />);

    // get the elements from the RENDERED component
    const button = screen.getByTestId('submit');
  }
}