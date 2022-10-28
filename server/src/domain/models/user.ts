import { UserData } from '../types.js';

export class User {
    private record: UserData

    constructor(record: UserData) {
        this.record = record;
    }

    get login() {
        return this.record.login;
    }

    get password() {
        return this.record.password
    }

    static toModel(record: UserData): User {
		return new User( record );
	}

    static getRecord(user: User ) {
        return user.record;
    }
}
