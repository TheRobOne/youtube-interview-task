import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import {MemoryRouter} from 'react-router-dom'
import configureStore from 'redux-mock-store';
import TopBar from './TopBar';

beforeEach(() => {
  const initialState = {
    videos: {
      isLoading: false,
      hasError: false,
      videos: [],
    },
    user: {
      user: false
    }
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  render(
    <Provider store={store}>
      <TopBar/>
    </Provider>,
    {wrapper: MemoryRouter}
  );
})

test('renders logo', () => {
  const logo = screen.getByAltText('logo');
  expect(logo).toBeInTheDocument();
});

test('displays search modal', async () => {
    fireEvent.click(screen.getByAltText('search modal'));

    await waitFor(() => screen.getByPlaceholderText('Search YouTube'));
    expect(screen.getByPlaceholderText('Search YouTube')).toBeInTheDocument();
});

test('changes input value', () => {
  

  const input = screen.getByPlaceholderText('Search');
  expect(input.value).toBe('');
  fireEvent.change(input, {target: {value: 'random'}});
  expect(input.value).toBe('random');
});
