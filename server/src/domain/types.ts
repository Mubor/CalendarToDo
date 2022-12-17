import { Collection } from 'mongodb'

export type UserData = {
    login: string,
    password: string
}

export type SubtaskData = {
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

export type DBCollection = {
    users: Collection<Document>
    tasks: Collection<Document>
}