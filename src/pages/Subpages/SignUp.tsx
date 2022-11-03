import React, { FC } from 'react';
import styled from 'styled-components';
import type { RootState } from '../../domain/state/store';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { InputField } from '../../components/FormComponents/InputFields';
import { SubmitButton } from '../../components/FormComponents/Buttons';

export const SignUp: FC = (): JSX.Element => {
  const validationSchema = Yup.object({
    login: Yup.string().required('This is a required field'),
    password: Yup.string().required('Ты шо надумал себе, голова?'),
    confirmPassword: Yup.string().required('Ты шо надумал себе, голова?'),
  });

  const navigate = useNavigate();

  const preventSubmit = (e) => {
    e.preventDefault();
    navigate('/main');
  };
  return (
    <FormContainer>
      <FormName>Create the task</FormName>
      <Formik
        initialValues={{
          login: '',
          password: '',
          confirmPassword: '',
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
            <InputField
              attr={{
                type: 'text',
                name: 'passwordConfirm',
                placeholder: 'Conform your password',
                labelText: 'Password confirm',
              }}
              validationParams={formikData}
            />

            <FormFooterWrapper>
              <Link to='/signin'>Sign in</Link>
              <SubmitButton text={'Sign up'} />
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
