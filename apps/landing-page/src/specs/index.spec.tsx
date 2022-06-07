import './matchMedia.mock';
import React from 'react';
import { render } from '@testing-library/react';
import Index from '../pages';
import theme from 'styles/theme';
import { ThemeProvider } from 'styled-components';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={theme}>
        <Index />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
