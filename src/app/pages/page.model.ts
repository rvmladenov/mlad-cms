import { Status } from '../share/status';
import { Category } from '../categories/category.model';
import { User } from '../users/user.model';

export class Page {
    _id: string;
    title: string;
    subtitle: string;
    text: string;
    status: Status;
    language: string;
    category: Category;
    username: string;

    created_dt: Date;
    created_by: User;
    modified_by: User;
    modified_dt: Date;

    constructor(title?: string, subtitle?: string, text?: string, status?: Status, category?: Category, lang?: string) {
        this.title = title;
        this.subtitle = subtitle;
        this.text = text;
        this.status = status || Status.NEW;
        this.category = category || null;
        this.language = lang || '';
    }
}