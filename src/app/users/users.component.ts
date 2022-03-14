import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private users: User[];
  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
    this.service.getAllUsers().subscribe(res => {
      this.users = res;
    })
  }
public deactivate(id: number): void{
  this.service.deleteUser(id).subscribe(res => {
    this.router.navigate(['/dashboard'])
  })
}

}
