import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import dayjs from 'dayjs';
import ErrorMessage from './ErrorMessage';
import PrimaryButton from './PrimaryButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { baseTheme } from '../styles/theme';

const TaskForm: FC = (): JSX.Element => {
  const [subtasks, setSubtasks] = useState([{}]);

  const addSubtask = () => {
    console.log(subtasks);
    setSubtasks([
      ...subtasks,
      {
        subtaskName: '',
        subtaskDate: '',
      },
    ]);
  };

  const validationSchema = Yup.object({
    taskName: Yup.string().required('This is a required field'),
    taskDescription: Yup.string(),
    startDate: Yup.date()
      .min(dayjs().startOf('day'), 'Start date could not be in the past')
      .required('This is a required field'),
    endDate: Yup.date()
      .required('This is a required field')
      .min(Yup.ref('startDate'), 'End date must be later then start date'),
    subtaskName: Yup.string().required('This is a required field'),
    subtaskDate: Yup.date()
      .required('This is a required field')
      .min(Yup.ref('startDate'), 'End date must be later then start date'),
  });

  return (
    <FormContainer>
      <FormName>Create the task</FormName>
      <Formik
        initialValues={{
          taskName: '',
          taskDescription: '',
          startDate: '',
          endDate: '',
          subtaskName: '',
          subtaskDate: '',
        }}
        onSubmit={() => {
          console.log('Submit');
        }}
        validateOnBlur
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <form>
            <InputWrapper>
              <Label htmlFor='taskName'>Task Name</Label>
              <Input
                type='text'
                name='taskName'
                placeholder={'Task name'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.taskName}
              />
              {touched.taskName && errors.taskName && <ErrorMessage message={errors.taskName} />}
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor='taskDescription'>Task Description</Label>
              <TextArea
                cols={40}
                name='taskDescription'
                placeholder='Text description'
                rows={10}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.taskDescription}
              />
              {touched.taskDescription && errors.taskDescription && (
                <ErrorMessage message={errors.taskDescription} />
              )}
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor='startDate'>Start Date</Label>
              <Input
                type='date'
                name='startDate'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.startDate}
              />
              {touched.startDate && errors.startDate && <ErrorMessage message={errors.startDate} />}
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor='endDate'>End Date</Label>
              <Input
                type='date'
                name='endDate'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.endDate}
              />
              {touched.endDate && errors.endDate && <ErrorMessage message={errors.endDate} />}
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor='subtaskName'>Subtask Name</Label>
              <Input
                type='text'
                name='subtaskName'
                placeholder={'Subtask name'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.taskName}
              />
              {touched.subtaskName && errors.subtaskName && (
                <ErrorMessage message={errors.subtaskName} />
              )}
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor='subtaskDate'>Subtask Date</Label>
              <Input
                type='date'
                name='subtaskDate'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.taskName}
              />
              {touched.subtaskDate && errors.subtaskDate && (
                <ErrorMessage message={errors.subtaskDate} />
              )}
            </InputWrapper>
            <AddButtonWrapper type={'button'} onClick={addSubtask}>
              <AddCircleOutlineIcon sx={{ fill: baseTheme.colors.bg.secondary }} />
              <AddButtonTitle>Add your subtask</AddButtonTitle>
            </AddButtonWrapper>
            <SubmitButtonWrapper>
              <PrimaryButton text={'Submit'} />
            </SubmitButtonWrapper>
          </form>
        )}
      </Formik>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  @media (${({ theme }) => theme.media.tablets}) {
    width: 70%;
    margin: 0 auto;
  }

  @media (${({ theme }) => theme.media.smallScreens}) {
    width: 60%;
  }

  @media (${({ theme }) => theme.media.desktops}) {
    width: 50%;
  }
`;

const FormName = styled.p`
  font-size: 20px;
  text-align: center;
  padding: 20px 0 0;

  @media (${({ theme }) => theme.media.smallScreens}) {
    padding: 0;
  }
`;

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
`;

const Input = styled.input`
  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }

  color: ${({ theme }) => theme.colors.font.secondary};
  padding: 10px;
  border: ${({ theme }) => theme.colors.bg.secondary} 1px solid;
  border-radius: 10px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 10px;
  border: ${({ theme }) => theme.colors.bg.secondary} 1px solid;
`;

const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const AddButtonWrapper = styled.button`
  display: flex;
  gap: 6px;
  align-items: center;
  border: none;
  cursor: pointer;
  padding-top: 16px;
`;

const AddButtonTitle = styled.p`
  color: ${({ theme }) => theme.colors.font.secondary};
`;

export default TaskForm;
