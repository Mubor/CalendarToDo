import { Request, Response, Router } from 'express';

import { DatabaseRepository } from '../ports/db-repository.js';

import { SignUpCommand } from '../commands/SignUpCommand.js';
import { SignInCommand } from '../commands/SignInCommand.js';
import { UpdateCommand } from '../commands/UpdateCommand.js';
import { async } from 'q';


export class Controller {
	router: Router

	constructor(
		private readonly dbRepository: DatabaseRepository
	) {

		this.router = Router();

		this.router.post('/signUp', this.handleSignUp);
		this.router.post('/signIn', this.handleSignIn);
		this.router.post('/update', this.handleUpdate);
	}

	process() {
		return this.router;
	}

	handleSignUp = async (req: Request, res: Response): Promise<void> => {
		const body = req.body;
		const result = await new SignUpCommand(this.dbRepository).execute(body);
        if(result instanceof Error) {
			res.json({
				status: 400,
				message: result.message
			});
		}
		else {
			res.json(
				{
					status:200,
					message:'user created',
					body,
					record: result
				});
			}
		}
		
	handleSignIn = async(req: Request, res: Response) : Promise<void> => {
		const body = req.body;
		const result = await new SignInCommand(this.dbRepository).execute(body);

        if(result instanceof Error) {
			res.json({
				status: 400,
				message: result.message
			});
		}
		else {
			res.json(
				{
					status:200,
					message:'successfully signed in',
					body,
					record: result,
			});
		}
	}

	handleUpdate = async(req: Request, res: Response):Promise<void> => {
		const body = req.body;
		const result = await new UpdateCommand(this.dbRepository).execute(body);
		console.log(body);
		
        if(result instanceof Error) {
			res.json({
				status: 400,
				message: result.message
			});
		}
		else {
			res.json(
				{
					status:200,
					message:'updated',
					body,
					record: result,
				});
		}
	}
}