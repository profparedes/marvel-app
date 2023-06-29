import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // necessária para o teste de componentes que usam o "Link"

import Header from '.';

describe('Header', () => {
  beforeEach(() => {
    render(
      <Router>
        <Header />
      </Router>,
    );
  });

  test('renders the Marvel logo', () => {
    const logoElement = screen.getByAltText('Marvel Logo');
    expect(logoElement).toBeInTheDocument();
  });

  test('renders link to the characters page', () => {
    const charactersLinkElement = screen.getByText('Characters');
    expect(charactersLinkElement).toBeInTheDocument();
    expect(charactersLinkElement.closest('a')).toHaveAttribute(
      'href',
      '/characters',
    );
  });

  test('renders link to the comics page', () => {
    const comicsLinkElement = screen.getByText('Comics');
    expect(comicsLinkElement).toBeInTheDocument();
    expect(comicsLinkElement.closest('a')).toHaveAttribute('href', '/comics');
  });
});
