import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { strToSlug, getImageUrl } from 'helpers';

import CharacterCard from '.';

describe('CharacterCard', () => {
  const characterMock = {
    id: 1,
    name: 'Test Character',
    thumbnail: { path: 'testpath', extension: 'jpg' },
    description: 'Test Description',
    comics: { available: 2, items: [] },
    series: { available: 2, items: [] },
    stories: { available: 2, items: [] },
    events: { available: 2, items: [] },
    urls: [],
  };

  beforeEach(() => {
    render(
      <Router>
        <CharacterCard character={characterMock} />
      </Router>,
    );
  });

  test('renders character name', () => {
    const characterName = screen.getByText(characterMock.name);
    expect(characterName).toBeInTheDocument();
  });

  test('renders character image', () => {
    const characterImage = screen.getByRole('img');
    expect(characterImage).toHaveAttribute(
      'src',
      getImageUrl(characterMock.thumbnail),
    );
  });

  test('correct link path', () => {
    const linkElement = screen.getByTestId('character-card-link');
    expect(linkElement).toHaveAttribute(
      'href',
      `/characters/${characterMock.id}/${strToSlug(characterMock.name)}`,
    );
  });
});
