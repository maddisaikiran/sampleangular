import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddtimelineComponent } from './addtimeline/addtimeline.component';
import { AdminaccountComponent } from './adminaccount/adminaccount.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FriendsComponent } from './friends/friends.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MytimelineComponent } from './mytimeline/mytimeline.component';
import { NetworkComponent } from './network/network.component';
import { PasswordComponent } from './password/password.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { AuthGuard } from './shared/auth.guard';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersComponent } from './users/users.component';
import { ViewtimelineComponent } from './viewtimeline/viewtimeline.component';


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
    path: "dashboard",
    component: DashboardComponent,
    canActivate:[AuthGuard]
  },
  // {
  //   path: "profile",
  //   component: ProfileComponent
  // },
  {
    path: "useraccount",
    component: UseraccountComponent
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
    path: "users",
    component: UsersComponent
  },
  {
    path:"updateuser",
    component:UpdateuserComponent
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
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
