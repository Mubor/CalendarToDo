import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import dayjs from 'dayjs';
import { SubmitButton } from '../../components/FormComponents/Buttons';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { baseTheme } from '../../styles/theme';
import { InputField, TextAreaField } from '../../components/FormComponents/InputFields';

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

  const preventSubmit = (e) => {
    e.preventDefault();
  };

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
                name: 'taskName',
                placeholder: 'Task name',
                labelText: 'Task Name',
              }}
              validationParams={formikData}
            />

            <TextAreaField
              attr={{
                cols: 40,
                rows: 10,
                name: 'taskDescription',
                placeholder: 'Task description',
                labelText: 'Task Description',
              }}
              validationParams={formikData}
            />

            <InputField
              attr={{ type: 'date', name: 'startDate', placeholder: '', labelText: 'Start Date' }}
              validationParams={formikData}
            />

            <InputField
              attr={{ type: 'date', name: 'endDate', placeholder: '', labelText: 'End Date' }}
              validationParams={formikData}
            />

            <InputField
              attr={{
                type: 'text',
                name: 'subtaskName',
                placeholder: 'Subtask name',
                labelText: 'Subtask Name',
              }}
              validationParams={formikData}
            />

            <InputField
              attr={{
                type: 'date',
                name: 'subtaskDate',
                placeholder: '',
                labelText: 'Subtask Date',
              }}
              validationParams={formikData}
            />

            <AddButtonWrapper type={'button'} onClick={addSubtask}>
              <AddCircleOutlineIcon sx={{ fill: baseTheme.colors.bg.secondary }} />
              <AddButtonTitle>Add your subtask</AddButtonTitle>
            </AddButtonWrapper>

            <SubmitButtonWrapper>
              <SubmitButton text={'Create'} />
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
