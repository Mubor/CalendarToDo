import { Request, Response, Router } from 'express';

import { DatabaseRepository } from '../ports/db-repository.js';
// import { UserRecord, UserData } from '../domain/types';
// import { Tasks } from '../domain/models/tasks';
// import { User } from '../domain/models/user';

import { SignUpCommand } from '../commands/SignUpCommand.js';
import { SignInCommand } from '../commands/SignInCommand.js';


export class Controller {
	router: Router

	constructor(
		private readonly dbRepository: DatabaseRepository
	) {

		this.router = Router();

		this.router.post('/signUp', this.handleSignUp);
		this.router.post('/signIn', this.handleSignIn);
		// this.router.post("/:id/pick", route(this.handlePick));
		// this.router.get("/:id", route(this.handleGet));
		// this.router.get("/", route(this.handleList))
		// this.router.delete("/:id", route(this.handleDelete));
		// this.router.post("/:id/complete", route(this.handleComplete));
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
					message:'user created',
					body,
					record: result,
				});
		}
	}


	// handleGet = async (req: Request<GetParams, ExpressSuccessResponse<AppointmentRecord>>): Promise<AppointmentRecord> => {
	// 	const { id } = req.params;

	// 	const appointment = await new GetAppointmentCommand(this.appointmentRepository).execute({
	// 		id,
	// 	});

	// 	const record = Appointment.toRecord(appointment);

	// 	this.nodeCliOutput.print(`[${record.id}] has been found`);

	// 	return Appointment.toRecord(appointment);
	// }

	// handleList = async (req: Request<unknown, ExpressSuccessResponse<AppointmentRecord[]>, unknown, ListQuery>): Promise<AppointmentRecord[]> => {
	// 	const { completed, limit } = req.query;

	// 	const appointments = await new ListAppointmentCommand(this.appointmentRepository).execute({ completed, limit});

	// 	this.nodeCliOutput.print(`[${appointments.length} records] has been found`);

	// 	return appointments.map(Appointment.toRecord);
	// } 

	// handlePick = async (req: Request<PickParams, unknown, PickBody>): Promise<void> => {
	// 	const { id } = req.params;
	// 	const { fullName, email } = req.body;

	// 	await new PickAppointmentCommand(this.appointmentRepository).execute({ id, operator: {
	// 		fullName,
	// 		email
	// 	}});

	// 	this.nodeCliOutput.print(`[${id} record] has been picked`);
	// } 

	// handleDelete = async (req: Request<GetParams, ExpressSuccessResponse<string>>, res: Response): Promise<void> => {
	// 	const { id } = req.params;
		
	// 	await new DeleteAppointmentCommand(this.appointmentRepository).execute({ id });

	// 	this.nodeCliOutput.print(`[${id}] has been deleted`);

	// 	res.status(204);
	// }

	// handleComplete = async (req: Request<GetParams, ExpressSuccessResponse<string>>, res: Response): Promise<AppointmentRecord> => {
	// 	const { id } = req.params;
		
	// 	const appointment = await new CompleteAppointmentCommand(this.appointmentRepository).execute({ id });

	// 	this.nodeCliOutput.print(`[${id}] has been completed`);

	// 	res.status(200);

	// 	return Appointment.toRecord(appointment);
	// }



}