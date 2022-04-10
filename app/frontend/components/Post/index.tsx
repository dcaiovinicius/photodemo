import React from 'react';
import { styled } from '@app/styles/stitches.config';

interface IPosts {
  title: string;
  raw_photo: string;
}

const Box = styled('div', {});

const Img = styled('img', {
  objectFit: 'cover',
  width: '100',
  borderRadius: 10,
});

export const Post: React.FC<IPosts> = ({ raw_photo, title }) => {
  return (
    <Box>
      <Img src={raw_photo} alt={title} />
    </Box>
  );
};
