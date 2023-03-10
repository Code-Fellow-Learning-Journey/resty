import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import {rest} from 'msw'
import {setupServer} from 'msw/node'

import App from './App';

const server = setupServer(
  rest.get('/getTest', (req, res, ctx) => {
    return res(ctx.json({results: [{name: 'tester'}, {name:}]}))
  }),
)




beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('App Component', () => {
  test('renders learn react link', async () => {
    render(<App />);
  
    let input = screen.getByTestId('form-input');
    let button = screen.getByTestId('submit-button');
  
    fireEvent.change(input, {target: {value: '/testGet'}})
    fireEvent.click(button);
    
    const pre = await screen.findByTestId('pre-form');
    expect(pre).toHaveTextContent('Hunter');
  });
});