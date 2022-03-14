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

  public update(id :number): void{
    this.router.navigateByUrl("/updateuser", {
      state: {id: id},
    });
  }
}
