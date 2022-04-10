import React from 'react';

import { Header } from '@app/components/Header';
import { globalStyles } from '@app/styles/stitches.config';

const Page: React.FC = ({ children }) => {
  globalStyles();

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Page;
