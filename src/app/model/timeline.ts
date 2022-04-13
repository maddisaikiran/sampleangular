import { Liked } from "./liked";

import { User } from "./user";

export class Timeline {
    timeId: number;
    image: String;
    message: String;
    count: number;
    user: User;
    likes: Liked[];
    comments: Comment[];
}
