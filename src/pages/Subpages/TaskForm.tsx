import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import dayjs from 'dayjs';
import { SubmitButton } from '../../components/FormComponents/Buttons';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { baseTheme } from '../../domain/styles/theme';
import { InputField, TextAreaField } from '../../components/FormComponents/InputFields';
import { setData } from '../../domain/state/user';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../domain/state/store';
import { UserRecord } from '../../types/user';
import { useNavigate } from 'react-router-dom';
import { json } from 'stream/consumers';
import axios from 'axios';

const TaskForm: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.currentUser);
  const [subtasks, setSubtasks] = useState({});
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required('This is a required field'),
    description: Yup.string(),
    start_date: Yup.date()
      .min(dayjs().startOf('day'), 'Start date could not be in the past')
      .required('This is a required field'),
    // end_date: Yup.date()
    //   .required('This is a required field')
    //   .min(Yup.ref('startDate'), 'End date must be later then start date'),
    subtaskName: Yup.string().required('This is a required field'),
    subtaskDate: Yup.date().required('This is a required field'),
    // .min(Yup.ref('startDate'), 'End date must be later then start date'),
  });

  const addSubtask = () => {
    console.log(subtasks);

    subtasks[Date.now().toString()] = {
      subtaskName: '',
      subtaskDate: '',
    };
    setSubtasks(subtasks);
  };

  const addTask = (inputtedValues) => {
    const { name, description, end_date, start_date } = inputtedValues;
    const { login, tasks } = user;

    const newTasks = {
      ...tasks,
      [Date.now().toString()]: {
        name,
        description,
        end_date,
        start_date,
        status: 'in progress',
        created_at: new Date(),
        subtasks: subtasks,
      },
    };

    const userData = {
      login,
      tasks: newTasks,
    };

    dispatch(setData({ payload: userData }));

    return userData;
  };

  const createFormSubmit = async (values) => {
    const updatedUser = addTask(values);
    const { data: response } = await axios.post('/update', updatedUser);

    if (response.status === 200) {
      navigate('/main');
    } else {
      alert(response.message);
    }
  };

  return (
    <FormContainer>
      <FormName>Create the task</FormName>
      <Formik
        initialValues={{
          name: '',
          description: '',
          start_date: '',
          end_date: '',
          subtaskName: '',
          subtaskDate: '',
        }}
        onSubmit={createFormSubmit}
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
                name: 'name',
                placeholder: 'Task name',
                labelText: 'Task Name',
              }}
              validationParams={formikData}
            />

            <TextAreaField
              attr={{
                cols: 40,
                rows: 10,
                name: 'description',
                placeholder: 'Task description',
                labelText: 'Task Description',
              }}
              validationParams={formikData}
            />

            <InputField
              attr={{ type: 'date', name: 'start_date', placeholder: '', labelText: 'Start Date' }}
              validationParams={formikData}
            />

            <InputField
              attr={{ type: 'date', name: 'end_date', placeholder: '', labelText: 'End Date' }}
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
              <AddCircleOutlineIcon sx={{ fill: baseTheme.colors.font.primary }} />
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
  color: ${({ theme }) => theme.colors.font.secondary};

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
  //color: ${({ theme }) => theme.colors.font.secondary};
`;

export default TaskForm;
