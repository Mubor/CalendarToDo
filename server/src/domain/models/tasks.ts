import { UserRecord, UserData, TaskData, UndertaskData } from '../types.js';

export class Tasks {
    private record: UserRecord;

    constructor(record: UserRecord) {
        this.record = record;
    }

    get login() {
        return this.record.login;
    }

    get tasks() {
        return this.record.tasks;
    }

    static toModel(record: UserRecord): Tasks {
		return new Tasks(record);
	}

    static getRecord(user: Tasks ) {
        return user.record;
    }

    static getTask (user: Tasks, id: string) {
        return user.record.tasks[id];
    }

    static getUndertask (user: Tasks, id: string) {
        return user.record.tasks[id];
    }

    static create ( {login}: UserData ) {
        return {
            login,
            tasks: {},
        }
    }
    
}