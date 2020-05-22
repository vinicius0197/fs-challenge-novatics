import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
} from '@testing-library/react';
import App from '../components/App';

describe('<App />', () => {
  let getByTestId;

  afterEach(cleanup);

  describe('some dummy feature', () => {
    beforeEach(() => {
      ({ getByTestId } = render(<App />));
    });

    it('checks something', () => {
      expect(getByTestId('testComponent').textContent).toEqual('Hello');
    });
  });
});