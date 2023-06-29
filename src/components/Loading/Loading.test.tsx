import { render, screen } from '@testing-library/react';

import Loading from '.';

describe('Loading', () => {
  test('renders loading image', () => {
    render(<Loading />);
    const loadingImage = screen.getByAltText('loading');
    expect(loadingImage).toBeInTheDocument();
  });
});
