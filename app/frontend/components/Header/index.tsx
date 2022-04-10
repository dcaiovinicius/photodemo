import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@app/styles/stitches.config';

// components
import { Container, Flex } from '@app/components/Containers';
import { Text } from '@app/components/Text';

// assets
import Logo from '@assets/logo.svg';

// Context
import { AuthContext } from '@app/contexts/AuthContext';

const StyledHeader = styled('header', {
  padding: '0.875rem',
  boxShadow: '$2',
});

export const Header: React.FC = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <StyledHeader>
      <Container>
        <Flex content="between" align="center" flow="row">
          <Logo />

          {!isAuth && (
            <Flex as="nav" flow="row">
              <Text
                css={{
                  '@bp2': {
                    display: 'none',
                    backgroundColor: '$black',
                  },
                }}
              >
                Do not have an account?
              </Text>
              <Link to="/app/signup">Sign up</Link>
            </Flex>
          )}

          {isAuth && (
            <Flex as="nav">
              <Link to="/app/post">New post</Link>
            </Flex>
          )}
        </Flex>
      </Container>
    </StyledHeader>
  );
};
