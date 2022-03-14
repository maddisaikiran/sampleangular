import { Admin } from "./admin";
import { Friend } from "./friend";

export class User {
id:number;
fullName:string;
mobile:number;
emailId:string;
password:string;
userStatus:boolean;
admin: Admin;
friend: Friend;
}
