import { Liked } from "./liked";

import { User } from "./user";

export class Timeline {
    id: number;
    image: String;
    message: String;
    user: User;
    likes: Liked[];
    comments: Comment[];
}
