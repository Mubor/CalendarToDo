import { Request, Response, Router } from 'express';

import { DatabaseRepository } from '../ports/db-repository.js';
// import { UserRecord, UserData } from '../domain/types';
// import { Tasks } from '../domain/models/tasks';
// import { User } from '../domain/models/user';

import { SignUpCommand } from '../commands/SignUpCommand.js';


export class Controller {
	router: Router

	constructor(
		private readonly dbRepository: DatabaseRepository
	) {

		this.router = Router();

		this.router.post('/signup', this.handleSignUp);
		this.router.post('/signup', this.handleSignIn);
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
		const request = await new SignUpCommand(this.dbRepository).execute(body);
	
        if(request instanceof Error) {
			res.json(request.message)
		}
		else {
			res.json(
				{
					status:200,
					message:'user created',
					body,
				});
		}
	}

	handleSignIn = async(req: Request, res: Response) : Promise<void> => {
		res.json(
			{
				status:200,
				message:'user created',
			
			});
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