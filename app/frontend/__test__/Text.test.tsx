import React from 'react';
import { Text } from '@app/components/Text';
import { render, screen } from './utils/test-utils';

describe('<Input />', () => {
  it('should render text', () => {
    render(<Text>Text</Text>);

    expect(screen.getByText(/text/i));
  });
});
