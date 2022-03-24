import { FriendStatus } from "./friend-status";
import { Timeline } from "./timeline";
import { User } from "./user";

export class Friend {
    id: number;
    user: User;
    friend: User;
    status: FriendStatus;
    statusCode:string;
    timelines: Timeline;
}
