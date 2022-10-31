import { DatabaseRepository } from '../ports/db-repository.js';
import { User } from '../domain/models/user.js';
import { Tasks } from '../domain/models/tasks.js';
import { UserRecord, UserData, DBCollection } from '../domain/types.js';
import { MongoClient} from 'mongodb';

const objectToModel = (data, collection: string) : User|Tasks => {

    const {_id, ...record} = data

    const entity = collection === 'users' ? User.toModel(record) : Tasks.toModel(record);

    return entity;
    
}

export class Database implements DatabaseRepository {
    private client: MongoClient;
    private db: DBCollection;

    constructor( connectionUri: string, dbName:string ) {
        this.client = new MongoClient(connectionUri)

        this.db = {
            users: this.client.db(dbName).collection('users'),
            tasks: this.client.db(dbName).collection('tasks')
        }
    }

    async save(record: UserRecord | UserData, collection: string): Promise<void> {
        await this.client.connect();
        await this.db[collection].insertOne(record);
        await this.client.close();
    }

    async findOne(query: Partial<UserRecord | UserData>, collection:string): Promise<User|Tasks> {
        await this.client.connect();
        const dbObject = await this.db[collection].findOne(query);
        await this.client.close(); 

        return objectToModel(dbObject, collection);
    }

    async update(query: Partial<UserRecord | UserData>, objToUpdate: Partial<UserRecord | UserData>, collection: string): Promise<void> {
        await this.client.connect();
        await this.db[collection].updateOne(query, {$set: objToUpdate});
        await this.client.close();
    }
    
    async delete(query: Partial<UserRecord | UserData>, collection: string): Promise<void> {
        await this.client.connect();
        
    }
}