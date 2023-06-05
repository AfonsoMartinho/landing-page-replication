import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Card from '../Card';
import mockCard from '../../mockData/Card.data.json'
import theme from '../../styles/Theme.styled'
import { ThemeProvider } from 'styled-components';

describe('Card component', () => {
  test('renders Card component without crashing', () => {
    render(<Card />);
  });

  test('renders label correctly', () => {
    const card = mockCard;

    mockCard.label.text = 'Label Text';

    render(
      <ThemeProvider theme={theme}>
        <Card card={card} />
      </ThemeProvider>);


    const labelElement = screen.getByText('Label Text');

    expect(labelElement).toBeInTheDocument();
  });

  test('renders title correctly', () => {
    const card = mockCard
    card.title = 'Card Title'

    render(
      <ThemeProvider theme={theme}>
        <Card card={card} />
      </ThemeProvider>);
    const titleElement = screen.getByText('Card Title');

    expect(titleElement).toBeInTheDocument();
  });

  test('renders content correctly when available', () => {
    const card = mockCard
    card.content.text = 'Card Content'

    render(
      <ThemeProvider theme={theme}>
        <Card card={card} />
      </ThemeProvider>);
    const contentElement = screen.getByText('Card Content');

    expect(contentElement).toBeInTheDocument();
  });

  test('does not render card content when not available', () => {
    const card = {};

    render(
      <ThemeProvider theme={theme}>
        <Card card={card} />
      </ThemeProvider>);
    const contentElement = screen.queryByText('Card Content');

    expect(contentElement).toBeNull();
  });

  test('passes down image props correctly', () => {
    const card = {
      ...mockCard,
      image: {
        src: 'image.jpg',
        alt: 'Image Alt Text',
        className: 'custom-image',
      },
    };

    render(
      <ThemeProvider theme={theme}>
        <Card card={card} />
      </ThemeProvider>);
    const imageElement = screen.getByAltText('Image Alt Text');

    expect(imageElement).toHaveClass('custom-image');
  });

});
