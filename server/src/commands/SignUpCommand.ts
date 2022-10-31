import { UserData } from '../domain/types.js';
import { Tasks } from '../domain/models/tasks.js';

import { DatabaseRepository } from '../ports/db-repository.js';


export class SignUpCommand {
	constructor(private readonly dbRepository: DatabaseRepository) {}

	async execute(user: UserData): Promise<void|Error> {

		const record =  await this.dbRepository.findOne({login: user.login}, 'users')

		if(!record){
			await this.dbRepository.save(user, 'users');
			await this.dbRepository.save(Tasks.create(user), 'tasks');
			return;
		}
		else {
			return new Error('User already exists');
		}

	}
}