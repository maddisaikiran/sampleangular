import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent{

  adm=new Admin();
  constructor(private router: Router){}
    public loginAdminAngular(name:string,pass:string){
      console.log(name+"*"+pass);
      if(name=="Admin"&&pass=="password"){
        localStorage.setItem('admin',"admin");
        this.router.navigate(['/admindashboard']);
      }
    }

}
