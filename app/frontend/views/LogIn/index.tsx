import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Formik, Field } from 'formik';

// Validates
import { LogInSchema } from '@app/views/LogIn/LogInSchema';

//  Components
import { Container, Flex } from '@app/components/Containers';
import { Heading } from '@app/components/Heading';
import { Button } from '@app/components/Button';
import { CustomInputComponent, Form } from '@app/components/Form';

// Layouts
import Page from '@app/views/_layouts/Page';

// Contexts
import { AuthContext } from '@app/contexts/AuthContext';

interface IFormValue {
  email: string;
  password: string;
}

const LogIn: React.FC = () => {
  const { handleSingIn, isAuth } = useContext(AuthContext);
  const initialValues: IFormValue = { email: '', password: '' };

  if (isAuth) {
    return <Navigate to="/app/feed" />;
  }

  return (
    <Page>
      <Container>
        <Flex content="center" align="center" flow="column">
          <Heading css={{ margin: '100px 0 30px' }}>Welcome back!</Heading>
          <Formik
            initialValues={initialValues}
            validationSchema={LogInSchema}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                handleSingIn(values);
                actions.setSubmitting(false);
              }, 1000);
              actions.setSubmitting(true);
            }}
          >
            {({ isSubmitting, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <Field
                  label="E-mail"
                  id="email"
                  name="email"
                  type="email"
                  component={CustomInputComponent}
                  placeholder="E-mail"
                />

                <Field
                  label="Password"
                  id="password"
                  name="password"
                  type="password"
                  component={CustomInputComponent}
                  placeholder="Password"
                />

                <Button
                  type="submit"
                  color="primary"
                  size="full"
                  disabled={isSubmitting}
                >
                  Log In
                </Button>
              </Form>
            )}
          </Formik>
        </Flex>
      </Container>
    </Page>
  );
};

export default LogIn;
