import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddtimelineComponent } from './addtimeline/addtimeline.component';
import { AdminaccountComponent } from './component/admin/adminaccount/adminaccount.component';
import { AdmindashboardComponent } from './component/admin/admindashboard/admindashboard.component';
import { AdminloginComponent } from './component/admin/adminlogin/adminlogin.component';
import { AboutComponent } from './component/user/about/about.component';
import { FriendsComponent } from './component/user/friends/friends.component';
import { HomeComponent } from './component/user/home/home.component';
import { MytimelineComponent } from './component/user/mytimeline/mytimeline.component';
import { NetworkComponent } from './component/user/network/network.component';
import { ViewtimelineComponent } from './component/user/viewtimeline/viewtimeline.component';
import { HeaderComponent } from './header/header.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

import { PasswordComponent } from './password/password.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { AuthGuard } from './shared/auth.guard';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SignupComponent } from './signup/signup.component';
import { UserloginComponent } from './userlogin/userlogin.component';




const routes: Routes = [
  {
    path:"",
    pathMatch: "full",
    redirectTo:"landingpage",
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "adminaccount",
    component: AdminaccountComponent
  },
  {
    path: "adminlogin",
    component: AdminloginComponent
  },
  {
    path: "userlogin",
    component: UserloginComponent
  },
  
  {
    path: "landingpage",
    component: LandingpageComponent
  },
  {
    path:"admindashboard",
    component: AdmindashboardComponent
  },
  {
    path:"profiles",
    component: ProfilesComponent
  },
  {
    path:"sidenav",
    component: SidenavComponent
  },
  {
     path:"header",
     component: HeaderComponent
  },
  {
    path:"password",
    component: PasswordComponent,
    canActivate:[AuthGuard],
    children:[
      {
          path: "home",
          component: HomeComponent
      },
      {
        path:"network",
        component:NetworkComponent
      },
      {
        path:"friends",
        component:FriendsComponent
      },
      {
        path:"addtimeline",
        component:AddtimelineComponent
      },
      {
        path:"viewtimeline",
        component:ViewtimelineComponent
      },
      {
        path:"mytimeline",
        component:MytimelineComponent
      },
      {
        path: "profile",
        component: ProfileComponent
      },
      {
        path: "about",
        component: AboutComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
