// import { User } from '../../domain/models/user.js';
import { UserData } from '../domain/types.js';

import { DatabaseRepository } from '../ports/db-repository.js';


export class SignUpCommand {
	constructor(private readonly dbRepository: DatabaseRepository) {}

	async execute(user: UserData): Promise<void|Error> {

		const record =  await this.dbRepository.findOne({login: user.login}, 'users')

		if(!record){
			return await this.dbRepository.save(user, 'users');
		}
		else {
			return new Error('User already exists');
		}

	}
}