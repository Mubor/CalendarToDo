import { UserData, UserRecord } from '../domain/types.js';
import { Tasks } from '../domain/models/tasks.js';

import { DatabaseRepository } from '../ports/db-repository.js';


export class SignInCommand {
	constructor(private readonly dbRepository: DatabaseRepository) {}

	async execute(user: UserData): Promise<UserRecord|Error> {
		
		const record =  await this.dbRepository.findOne(user, 'users')

		if(record) {
			const tasksRecord = <Tasks> await this.dbRepository.findOne({login: user.login}, 'tasks');

			return Tasks.getRecord(tasksRecord);
		}
		else {
			return new Error('Login or password was incorrect');
		}

	}
}