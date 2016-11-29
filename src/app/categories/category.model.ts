import { Status } from '../share/status';
import { User } from '../users/user.model';

export class Category {
    _id: string;
    name: string;
    description: string;
    master: any;
    status: Status;

    created_dt: Date;
    created_by: User;
    modified_by: User;
    modified_dt: Date;

    constructor(pageId: string, name: string, description: string, master?: any, status?: string) {
        this._id = pageId;
        this.name = name;
        this.description = description;
        this.master = master;
        this.status = status || Status.NEW;
    }
}