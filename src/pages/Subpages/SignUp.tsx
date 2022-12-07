import React, { FC } from 'react';
import styled from 'styled-components';
import type { RootState } from '../../domain/state/store';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { InputField } from '../../components/FormComponents/InputFields';
import { SubmitButton } from '../../components/FormComponents/Buttons';
import { setData } from '../../domain/state/user';
import { createModuleResolutionCache } from 'typescript';

export const SignUp: FC = (): JSX.Element => {
  // const user = useSelector((state: RootState) => state.currentUser.currentUser);
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    // login: Yup.string().required('This is a required field'),
    // password: Yup.string().required('Ты шо надумал себе, голова?'),
    // confirmPassword: Yup.string().required('Ты шо надумал себе, голова?'),
  });

  const navigate = useNavigate();

  return (
    <FormContainer>
      <FormName>Create the task</FormName>
      <Formik
        initialValues={{
          login: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={async (values, action) => {
          action.setSubmitting(false);
          const request = { login: values.login, password: values.password };
          console.log('here');

          const response = await fetch('/signUp', {
            method: 'POST',
            headers: new Headers({ 'content-type': 'application/json' }),
            body: JSON.stringify(request),
          });

          const responseData = await response.json();

          console.log(responseData);

          if (responseData.status === 200) {
            dispatch(setData({ payload: responseData.record }));
            navigate('/main');
          }
          action.setSubmitting(true);
        }}
        validateOnBlur
        validationSchema={validationSchema}
      >
        {(formikData) => (
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              console.log('start');
              await formikData.handleSubmit();
              console.log('end');
            }}
          >
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
