import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-adminaccount',
  templateUrl: './adminaccount.component.html',
  styleUrls: ['./adminaccount.component.css']
})
export class AdminaccountComponent implements OnInit {
  users: User[];
  constructor(private router: Router,private service: UserService) { }
  searchText: any;
  ngOnInit() {
    this.service.getAllUser().subscribe(res => {
      this.users = res.data;
    });
  }

  

  update(users: User){
    
    this.service.updateUserStatus(users.id).subscribe((res) => {
    
    console.log(res);
      this.ngOnInit();
    })

  }
  delete(user: User){

    this.service.updateUserStatuss(user.id).subscribe((res) => {
      console.log(res);
      this.ngOnInit();
    })
    
    
  
  }
}
