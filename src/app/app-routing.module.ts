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
import { UnsavedCheckGuard } from './shared/unsaved-check.guard';
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
    component: SignupComponent,
    data:{title: "Sign up Page"}
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
    component: UserloginComponent,
    data:{title: "Login Page"}
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
          component: HomeComponent,
          data:{title: "home"}
      },
      {
        path:"network",
        component:NetworkComponent,
        data:{title: "Add Friends"}
      },
      {
        path:"friends",
        component:FriendsComponent,
        canDeactivate:[UnsavedCheckGuard],
        data:{title: "List of Friends"}
      },
      {
        path:"addtimeline",
        component:AddtimelineComponent,
        canDeactivate:[UnsavedCheckGuard],
        data:{title: "Add Timeline"}
      },
      {
        path:"viewtimeline",
        component:ViewtimelineComponent,
        canDeactivate:[UnsavedCheckGuard],
        data:{title: "View Friends Timeline"}
      },
      {
        path:"mytimeline",
        component:MytimelineComponent,
        data:{title: "View My Timeline"}
      },
      {
        path: "profile",
        component: ProfileComponent,
        canDeactivate:[UnsavedCheckGuard],
        data:{title: "Edit Profile"}
      },
      {
        path: "about",
        component: AboutComponent,
        data:{title: "Profile"}
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
