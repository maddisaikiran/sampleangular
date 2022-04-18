import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddtimelineComponent } from '../addtimeline/addtimeline.component';
import { ComponentCanDeactivate } from '../component-can-deactivate';
import { FriendsComponent } from '../component/user/friends/friends.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedCheckGuard implements CanDeactivate<ComponentCanDeactivate> {
  canDeactivate(
    component: ComponentCanDeactivate)
    {
      if(component.canLeave){
        return component.canLeave();
      }else{
       return true;
      }
  }
  
}
