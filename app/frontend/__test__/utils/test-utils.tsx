import React, { FC, ReactElement } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, RenderOptions } from '@testing-library/react';
import { globalStyles } from '@app/styles/stitches.config';

const Providers: FC = ({ children }) => {
  globalStyles();
  return <div>{children}</div>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: Providers, ...options });

customRender(<Providers />);

// eslint-disable-next-line import/no-extraneous-dependencies
export * from '@testing-library/react';
export { customRender as render };
