import { UserRecord, UserData } from '../domain/types.js';
import { User } from '../domain/models/user.js';
import { Tasks } from '../domain/models/tasks.js';



export interface DatabaseRepository{
    save(record: UserRecord | UserData, collection: string ): Promise<void>;
    findOne(query: Partial<UserRecord | UserData>, collection: string): Promise<User|Tasks>;
    update(query: Partial<UserRecord | UserData>, objToUpdate: Partial<UserRecord | UserData>, collection: string): Promise<void>;
    delete(query: Partial<UserRecord | UserData>, collection: string): Promise<User|Tasks>;
}