import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-adminaccount',
  templateUrl: './adminaccount.component.html',
  styleUrls: ['./adminaccount.component.css']
})
export class AdminaccountComponent implements OnInit {
  users: User[];
  constructor(private router: Router,private service: UserService) { }

  ngOnInit() {
    this.service.getAllUsers().subscribe(res => {
      this.users = res;
    });
  }

  // public update(id :number): void{
  //   this.router.navigateByUrl("/updateuser", {
  //     state: {id: id},
  //   });
  // }

  update(users: User){
    // let d = {
    //   id: userSelected.id,
    //  userStatus: true 
    // };
   // for(let user of this.users)
    this.service.updateUserStatus(users.id).subscribe((res) => {
     users.userStatus = false;
    console.log(res);
      this.ngOnInit();
    })

  }
  delete(user: User){

    this.service.updateUserStatuss(user.id).subscribe((res) => {
      console.log(res);
     // user.userStatus = false;
      this.ngOnInit();
    })
    
    
  
  }
}
