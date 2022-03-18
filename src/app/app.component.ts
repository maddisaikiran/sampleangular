import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sample-project';
  // router: any;
   ngOnInit() {
   //   this.router.navigate(["/home"]);
   }

   logout(){
     localStorage.removeItem("user");
     this.router.navigate([""]);
   }

   constructor(private router: Router){

   }
}
