import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from '.';

describe('Footer', () => {
  beforeEach(() => {
    render(
      <Router>
        <Footer />
      </Router>,
    );
  });

  test('renders the Marvel logo', () => {
    const logo = screen.getByAltText('Marvel Logo');
    expect(logo).toBeInTheDocument();
  });

  test('renders "ABOUT MARVEL" section', () => {
    const aboutMarvel = screen.getByText('ABOUT MARVEL');
    expect(aboutMarvel).toBeInTheDocument();
  });

  test('renders "ADVERTISING" section', () => {
    const advertising = screen.getByText('ADVERTISING');
    expect(advertising).toBeInTheDocument();
  });

  test('renders social media icons', () => {
    const facebookIcon = screen.getByTestId('facebook-icon');
    const twitterIcon = screen.getByTestId('twitter-icon');
    const instagramIcon = screen.getByTestId('instagram-icon');
    const youtubeIcon = screen.getByTestId('youtube-icon');

    expect(facebookIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();
    expect(instagramIcon).toBeInTheDocument();
    expect(youtubeIcon).toBeInTheDocument();
  });
});
