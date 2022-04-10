import { styled } from '@app/styles/stitches.config';

export const Input = styled('input', {
  border: 'none',
  borderRadius: 8,
  fontSize: '$1',
  padding: '16px',
  outline: 'none',
  background: '$gray',
  '&:hover': {
    boxShadow: '$1',
    background: '$white',
  },
});

export const Label = styled('label', {
  margin: '2px 0px 2px',
});

export const Error = styled('div', {
  color: 'red',
  fontSize: 12,
});
