import React, { FC } from 'react';
import styled from 'styled-components';
import type { RootState } from '../../domain/state/store';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { InputField } from '../../components/FormComponents/InputFields';
import { SubmitButton } from '../../components/FormComponents/Buttons';

export const SignIn: FC = (): JSX.Element => {
  const validationSchema = Yup.object({
    login: Yup.string().required('This is a required field'),
    password: Yup.string().required('Ты шо надумал себе, голова?'),
  });

  const preventSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <FormContainer>
      <FormName>Create the task</FormName>
      <Formik
        initialValues={{
          login: '',
          password: '',
        }}
        onSubmit={() => {
          console.log('submit');
        }}
        validateOnBlur
        validationSchema={validationSchema}
      >
        {(formikData) => (
          <form onSubmit={preventSubmit}>
            <InputField
              attr={{
                type: 'text',
                name: 'login',
                placeholder: 'Input your login',
                labelText: 'Login',
              }}
              validationParams={formikData}
            />
            <InputField
              attr={{
                type: 'text',
                name: 'password',
                placeholder: 'Input your password',
                labelText: 'Password',
              }}
              validationParams={formikData}
            />

            <FormFooterWrapper>
              <Link to='/signup'>Sign up</Link>
              <SubmitButton text={'Sign in'} />
            </FormFooterWrapper>
          </form>
        )}
      </Formik>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const FormName = styled.p`
  font-size: 20px;
  text-align: center;
  padding: 20px 0 0;

  @media (${({ theme }) => theme.media.smallScreens}) {
    padding: 0;
  }
`;

const FormFooterWrapper = styled.div`
  display: flex;
  flex-direction: space-around;
`;
