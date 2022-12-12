import { UserRecord } from '../domain/types.js';


import { DatabaseRepository } from '../ports/db-repository.js';


export class UpdateCommand {
	constructor(private readonly dbRepository: DatabaseRepository) {}

	async execute(user: UserRecord): Promise<string|Error> {

		try {
			await this.dbRepository.update({login: user.login}, user, 'tasks');
            return 'Record succesfully updated';
        } catch (error) {
            
            return new Error('Something get wrong');
        }
	}
}
