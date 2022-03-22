import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  fullName="";
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit(){
    this.fullName = localStorage.getItem("name");
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
  logout(){
    localStorage.removeItem("user");
    this.router.navigate(["/landingpage"]);
  }
}
