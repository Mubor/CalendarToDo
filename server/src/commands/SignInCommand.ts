import { UserData, UserRecord } from '../domain/types.js';
import { Tasks } from '../domain/models/tasks.js';

import { DatabaseRepository } from '../ports/db-repository.js';


export class SignInCommand {
	constructor(private readonly dbRepository: DatabaseRepository) {}

	async execute(user: UserData): Promise<void|Error> {

		// const record =  await this.dbRepository.findOne({login: user.login, password: user.password}, 'users')

		// if(record){
		// 	const {login, tasks} = await this.dbRepository.findOne({login: user.login}, 'tasks');
			
		// 	return;
		// }
		// else {
		// 	return new Error('Login or password wa s incorrect');
		// }

	}
}