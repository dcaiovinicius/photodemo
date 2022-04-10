import React from 'react';
import { Heading } from '@app/components/Heading';
import { render, screen } from './utils/test-utils';

describe('<Heading />', () => {
  it('should render heading', () => {
    render(<Heading>Text</Heading>);

    expect(screen.getByRole('heading', { name: /text/i }));
  });
});
