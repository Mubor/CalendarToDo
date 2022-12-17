type SubtaskData = {
  [id: string]: {
    subtaskName: string;
    subtaskDescription: string;
    date: Date;
  };
};

export type TaskData = {
  [id: string]: {
    status: string;
    name: string;
    description: string;
    start_date: Date;
    end_date: Date;
    created_at: Date;
    subtasks: SubtaskData;
  };
};

export type UserRecord = {
  login: string;
  tasks: TaskData;
};
