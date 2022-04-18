import { Timeline } from "./timeline";
import { User } from "./user";

export class Comment {

    id: number;
    timeline: Timeline;
    user: User;
    comment: String;
}
