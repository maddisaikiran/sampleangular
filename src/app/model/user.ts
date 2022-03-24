import { Friend } from "./friend";
import { Timeline } from "./timeline";

export class User {
    id:number;
    fullName:string;
    mobile:number;
    email:string;
    password:string;
    userStatus:boolean;
    //admin: Admin;
    friend: Friend;
    timelines: Timeline[];
}
