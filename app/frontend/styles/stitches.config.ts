// stitches.config.ts
import { createStitches, globalCss } from '@stitches/react';

export const { styled, css } = createStitches({
  theme: {
    colors: {
      primary: '#FFBB11',
      secundary: '#764701',
      gray: '#eee',
      black: '#000',
    },
    fontSizes: {
      1: '1.125rem',
    },
    shadows: {
      1: '0 0 0 3px #fea, 0 0 0 4px #fb1',
      2: '0 1px 1px rgb(0 0 0 / 12%)',
    },
  },
  media: {
    bp1: '(max-width: 320px)',
    bp2: '(max-width: 768px)',
  },
});

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
  },
  a: {
    color: '$black',
  },
  ul: {
    listStyleType: 'none',
  },
  body: {
    fontFamily: "'Roboto', sans-serif",
  },
});
