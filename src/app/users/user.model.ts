export class User {
    _id: string;
    username: string;
    password: string;
    email: string;

    created_dt: Date;
    created_by: User;
    modified_by: User;
    modified_dt: Date;

    constructor(username: string, password: string, email?: string) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
}