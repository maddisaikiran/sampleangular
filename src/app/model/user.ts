import { Friend } from "./friend";
import { Liked } from "./liked";
import { Message } from "./message";

import { Timeline } from "./timeline";

export class User {
    id:number;
    fullName:string;
    mobileNo:number;
    emailId:string;
    password:string;
    userStatus:boolean;
    friend: Friend;
    timelines: Timeline[];
    likes: Liked[];
    messages: Message[];
}
