import React, { FC } from 'react';
import styled from 'styled-components';

import ErrorMessage from '../ErrorMessage';

type InputAttributes = {
  type?: string;
  name: string;
  placeholder?: string;
  labelText: string;
  rows?: number;
  cols?: number;
};

interface InputProps {
  attr: InputAttributes;
  validationParams: any;
}

export const InputField: FC<InputProps> = ({ attr, validationParams }): JSX.Element => {
  const { values, touched, errors, handleChange, handleBlur } = validationParams;
  const { name, type, placeholder, labelText } = attr;
  return (
    <InputWrapper>
      <Label htmlFor={name}>{labelText}</Label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name]}
      />
      {touched[name] && errors[name] && <ErrorMessage message={errors[name]} />}
    </InputWrapper>
  );
};

export const TextAreaField: FC<InputProps> = ({ attr, validationParams }): JSX.Element => {
  const { values, touched, errors, handleChange, handleBlur } = validationParams;
  const { cols, rows, name, placeholder, labelText } = attr;
  return (
    <InputWrapper>
      <Label htmlFor={name}>{labelText}</Label>
      <TextArea
        cols={cols}
        name={name}
        placeholder={placeholder}
        rows={rows}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name]}
      />
      {touched[name] && errors[name] && <ErrorMessage message={errors[name]} />}
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 10;
`;

const Label = styled.label`
  padding-bottom: 6px;
  padding-left: 4px;
  font-weight: 300;
  padding-top: 20px;
  color: ${({ theme }) => theme.colors.font.secondary};
`;

const Input = styled.input`
  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }

  padding: 10px;
  border: ${({ theme }) => theme.colors.border.primary} 1px solid;
  border-radius: 10px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 10px;
  border: ${({ theme }) => theme.colors.border.primary} 1px solid;
`;
