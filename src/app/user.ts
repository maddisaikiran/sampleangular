import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { Admin } from "./admin";
import { Friend } from "./friend";
import { Timeline } from "./timeline";

export class User {
id:number;
fullName:string;
mobile:number;
emailId:string;
password:string;
userStatus:boolean;
admin: Admin;
friend: Friend;
mytimelines: Timeline[];
message: Message;
}
