import { FriendStatus } from "./friend-status";
import { User } from "./user";

export class Friend {
    id: number;
    user: User;
    friend: User;
    status: FriendStatus;
    statusCode:string;
}
