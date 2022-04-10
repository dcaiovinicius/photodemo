import { styled } from '@app/styles/stitches.config';

export const Container = styled('div', {
  maxWidth: '61.5rem',
  margin: 'auto',
});

export const Grid = styled('div', {
  display: 'grid',
});

export const Flex = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  variants: {
    content: {
      center: {
        justifyContent: 'center',
      },
      between: {
        justifyContent: 'space-between',
      },
    },
    align: {
      center: {
        alignItems: 'center',
      },
    },
    flow: {
      column: {
        flexDirection: 'column',
      },
      row: {
        flexDirection: 'row',
      },
    },
  },
});
