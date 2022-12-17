import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { InputField } from '../../components/FormComponents/InputFields';
import { SubmitButton } from '../../components/FormComponents/Buttons';
import { useDispatch } from 'react-redux';
import { setData } from '../../domain/state/user';
import { FormContainer, FormName, FormFooterWrapper, SignLink } from '../../domain/styles/SignInUp';

export const SignIn: FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    login: Yup.string().required('This is a required field'),
    password: Yup.string().required('This is a required field'),
  });

  const navigate = useNavigate();

  return (
    <FormContainer>
      <FormName>Sign In</FormName>
      <Formik
        initialValues={{
          login: '',
          password: '',
        }}
        onSubmit={async (values) => {
          const request = { login: values.login, password: values.password };

          const response = await fetch('/signIn', {
            method: 'POST',
            headers: new Headers({ 'content-type': 'application/json' }),
            body: JSON.stringify(request),
          });

          const responseData = await response.json();

          console.log(responseData);

          if (responseData.status === 200) {
            console.log(responseData.record);
            dispatch(setData({ payload: responseData.record }));
            navigate('/main');
          } else {
            alert(responseData.message);
          }
        }}
        validateOnBlur
        validationSchema={validationSchema}
      >
        {(formikData) => (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              formikData.handleSubmit();
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
                type: 'password',
                name: 'password',
                placeholder: 'Input your password',
                labelText: 'Password',
              }}
              validationParams={formikData}
            />

            <FormFooterWrapper>
              <SignLink to='/signup'>Sign up</SignLink>
              <SubmitButton text={'Sign in'} />
            </FormFooterWrapper>
          </form>
        )}
      </Formik>
    </FormContainer>
  );
};
