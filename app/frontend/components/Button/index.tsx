import { styled } from '@app/styles/stitches.config';

export const Button = styled('button', {
  backgroundColor: '$primary',
  border: 'none',
  margin: '10px 0px 10px',
  cursor: 'pointer',
  textAlign: 'center',
  borderRadius: 8,
  color: '$secundary',
  fontSize: '$1',
  padding: '16px 17px',

  '&:hover': {
    boxShadow: '$1',
  },
  '&:disabled': {
    backgroundColor: '$gray',
    boxShadow: 'none',
    cursor: 'wait',
  },

  variants: {
    color: {
      primary: {
        backgroundColor: '$primary',
      },
    },
    size: {
      full: {
        width: '100%',
      },
    },
  },
});
