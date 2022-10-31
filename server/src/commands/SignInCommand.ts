import { UserData } from '../domain/types.js';
import { Tasks } from '../domain/models/tasks.js';

import { DatabaseRepository } from '../ports/db-repository.js';


export class SignInCommand {
	constructor(private readonly dbRepository: DatabaseRepository) {}

	async execute(user: UserData): Promise<Tasks|Error> {

		const record =  await this.dbRepository.findOne({login: user.login, password: user.password}, 'users')

		if(record){
			await this.dbRepository.save(user, 'users');
			await this.dbRepository.save(Tasks.create(user), 'tasks');
			return;
		}
		else {
			return new Error('Login or password wa s incorrect');
		}

	}
}