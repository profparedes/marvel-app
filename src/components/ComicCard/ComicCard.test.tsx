import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { strToSlug, getImageUrl } from 'helpers';

import { ComicType } from 'types/ComicType';

import ComicCard from '.';

describe('ComicCard', () => {
  const mockData: ComicType = {
    id: 1,
    title: 'Test Comic',
    thumbnail: {
      path: 'test/path',
      extension: 'jpg',
    },
    description: 'This is a test comic',
    pageCount: 100,
    series: {
      name: 'Test Series',
    },
    dates: [{ type: 'Onsale', date: '2023-04-28T00:00:00-0400' }],
    prices: [{ type: 'Print Price', price: 3.99 }],
    creators: {
      available: 1,
      items: [{ name: 'Test Creator', role: 'writer' }],
    },
    characters: {
      available: 2,
      items: [{ name: 'Character 1' }, { name: 'Character 2' }],
    },
    stories: {
      available: 1,
      items: [{ name: 'Test Story', type: 'interiorStory' }],
    },
  };

  beforeEach(() => {
    render(
      <Router>
        <ComicCard comic={mockData} />
      </Router>,
    );
  });

  test('should render comic title', () => {
    expect(screen.getByText(/Test Comic/i)).toBeInTheDocument();
  });

  test('should render comic image with correct src', () => {
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', getImageUrl(mockData.thumbnail));
  });

  test('should render link to comic detail with correct href', () => {
    const link = screen.getByTestId('comic-card-link');
    const expectedHref = `/comics/${mockData.id}/${strToSlug(mockData.title)}`;
    expect(link).toHaveAttribute('href', expectedHref);
  });
});
