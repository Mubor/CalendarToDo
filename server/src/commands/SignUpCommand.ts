import { UserData, UserRecord } from '../domain/types.js';
import { Tasks } from '../domain/models/tasks.js';


import { DatabaseRepository } from '../ports/db-repository.js';


export class SignUpCommand {
	constructor(private readonly dbRepository: DatabaseRepository) {}

	async execute(user: UserData): Promise<UserRecord|Error> {

		const record =  await this.dbRepository.findOne({login: user.login}, 'users')

		if(!record){
			const userRecord = Tasks.create(user);
			await this.dbRepository.save(user, 'users');
			await this.dbRepository.save(userRecord, 'tasks');
			return userRecord;
		}
		else {
			return new Error('User already exists');
		}

	}
}