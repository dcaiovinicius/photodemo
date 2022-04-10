import React from 'react';
import { Button } from '@app/components/Button';
import { render, screen } from './utils/test-utils';

describe('<Button />', () => {
  it('should render main', () => {
    render(<Button>Text</Button>);

    expect(screen.getByRole('button', { name: /text/i }));
  });
});
