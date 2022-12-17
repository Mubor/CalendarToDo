import React, { FC, useState } from 'react';
import styled from 'styled-components';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { baseTheme } from '../../domain/styles/theme';

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

  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const togglePasswordVisibility = () => setIsPasswordShow(!isPasswordShow);

  return (
    <InputContainer>
      <Label htmlFor={name}>{labelText}</Label>
      <InputWrapper>
        <Input
          type={type === 'password' ? (isPasswordShow ? 'text' : 'password') : type}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[name]}
        />
        {type === 'password' && (
          <>
            <IconWrapper isPasswordShow={isPasswordShow} onClick={togglePasswordVisibility}>
              <VisibilityIcon sx={{ fill: baseTheme.colors.font.secondary, fontSize: 17 }} />
            </IconWrapper>
            <IconOffWrapper isPasswordShow={isPasswordShow} onClick={togglePasswordVisibility}>
              <VisibilityOffIcon sx={{ fill: baseTheme.colors.font.secondary, fontSize: 17 }} />
            </IconOffWrapper>
          </>
        )}
      </InputWrapper>

      {touched[name] && errors[name] && <ErrorMessage message={errors[name]} />}
    </InputContainer>
  );
};

export const TextAreaField: FC<InputProps> = ({ attr, validationParams }): JSX.Element => {
  const { values, touched, errors, handleChange, handleBlur } = validationParams;
  const { cols, rows, name, placeholder, labelText } = attr;
  return (
    <InputContainer>
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
    </InputContainer>
  );
};

interface IconProp {
  isPasswordShow: boolean;
}
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 10;
`;

const InputWrapper = styled.div`
  position: relative;
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
  width: 100%;
  padding: 10px;
  border: ${({ theme }) => theme.colors.border.primary} 1px solid;
  border-radius: 10px;
`;

const IconWrapper = styled.button<IconProp>`
  display: ${({ isPasswordShow }) => (isPasswordShow ? 'none' : 'block')};
  cursor: pointer;
  position: absolute;
  top: 30%;
  //right: 2%;
  right: 4%;
  border: none;
`;

const IconOffWrapper = styled(IconWrapper)<IconProp>`
  display: ${({ isPasswordShow }) => (!isPasswordShow ? 'none' : 'block')};
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 10px;
  border: ${({ theme }) => theme.colors.border.primary} 1px solid;
`;
