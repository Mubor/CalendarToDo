type UndertaskData = {
  [id: string]: {
    name: string;
    description: string;
    date: Date;
  };
};

type TaskData = {
  [id: string]: {
    status: string;
    name: string;
    description: string;
    start_date: Date;
    end_date: Date;
    created_at: Date;
    undertasks: UndertaskData;
  };
};

export type UserRecord = {
  login: string;
  tasks: TaskData;
};
