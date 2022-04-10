import React, { FC } from 'react';
import { FieldProps } from 'formik';

import { styled } from '@app/styles/stitches.config';

// Components
import { Flex } from '@app/components/Containers';
import { Input, Error, Label } from '@app/components/Form/styles';

interface CustomInputProps {
  type: string;
  label: string;
}

export const CustomInputComponent: FC<CustomInputProps & FieldProps> = ({
  field,
  form: { touched, errors },
  type,
  label,
  ...props
}) => {
  const { name } = field;

  return (
    <Flex flow="column" css={{ marginTop: 20 }}>
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} {...field} {...props} />
      {touched[field.name] && errors[field.name] && (
        <Error className="error">{errors[field.name]}</Error>
      )}
    </Flex>
  );
};

export const Form = styled('form', {
  width: '100%',
  maxWidth: 353,
});
