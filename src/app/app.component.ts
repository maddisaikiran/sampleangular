import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Facebook Application';
   ngOnInit() {
     this.changeTitle();
   }
   constructor(private router: Router, private titleService: Title, private activePage: ActivatedRoute){

   }
   changeTitle(){
     this.router.events.subscribe(event => {
       switch(true) {
         case event instanceof NavigationEnd:
           let child = this.activePage.firstChild;

           while(child.firstChild){
             child = child.firstChild;
           }

           this.titleService.setTitle(child.snapshot.data.title);
           break;

        default:
          break;
       }
     })
   }
}
