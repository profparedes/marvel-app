import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CharacterList from '.';

const mockData = {
  available: 2,
  items: [
    { name: 'Spider-Man', type: 'Comic' },
    { name: 'Iron Man', type: 'Comic' },
  ],
};

describe('CharacterList', () => {
  beforeEach(() => {
    render(<CharacterList item={mockData} title="Comics" />);
  });

  test('renders the title', () => {
    const titleElement = screen.getByText('Comics avaliable: 2');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the button to show/hide content', () => {
    const buttonElement = screen.getByText('Show Comics');
    expect(buttonElement).toBeInTheDocument();
  });

  test('toggle show/hide content on button click', async () => {
    render(<CharacterList item={mockData} title="Comics" />);

    const buttonElement = screen.getAllByTestId(
      'character-list-show-hide-button',
    )[0];

    userEvent.click(buttonElement);

    await waitFor(() => {
      expect(screen.queryByText('Spider-Man')).toBeInTheDocument();
      expect(screen.queryByText('Iron Man')).toBeInTheDocument();
    });

    userEvent.click(buttonElement);

    await waitFor(() => {
      expect(screen.queryByText('Spider-Man')).not.toBeInTheDocument();
      expect(screen.queryByText('Iron Man')).not.toBeInTheDocument();
    });
  });
});
