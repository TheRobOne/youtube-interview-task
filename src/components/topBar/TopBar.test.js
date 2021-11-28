import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TopBar from './TopBar';

beforeEach(() => {
    render(<TopBar />);
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
