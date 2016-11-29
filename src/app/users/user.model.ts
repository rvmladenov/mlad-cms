export class User {
    _id: string;
    username: string;
    email: string;

    created_dt: Date;
    created_by: User;
    modified_by: User;
    modified_dt: Date;

    constructor(userId: string, username: string, email: string) {
        this._id = userId;
        this.username = username;
        this.email = email;
    }
}