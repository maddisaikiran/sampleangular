import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { PasswordComponent } from './password/password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
import { AdminaccountComponent } from './adminaccount/adminaccount.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersComponent } from './users/users.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserStatusPipe } from './user-status.pipe';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { NetworkComponent } from './network/network.component';
import { FriendsComponent } from './friends/friends.component';
import { BaseComponent } from './base/base.component';
import { AddtimelineComponent } from './addtimeline/addtimeline.component';
import { MytimelineComponent } from './mytimeline/mytimeline.component';
import { ViewtimelineComponent } from './viewtimeline/viewtimeline.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import * as Material from "@angular/material";
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    PasswordComponent,
    DashboardComponent,
    ProfileComponent,
    UseraccountComponent,
    AdminaccountComponent,
    AdminloginComponent,
    UserloginComponent,
    UsersComponent,
    UpdateuserComponent,
    UserStatusPipe,
    UsersignupComponent,
    NetworkComponent,
    FriendsComponent,
    BaseComponent,
    AddtimelineComponent,
    MytimelineComponent,
    ViewtimelineComponent,
    LandingpageComponent,
    AdmindashboardComponent,
    ProfilesComponent,
    HeaderComponent,
    SidenavComponent,
    // MatFormFieldModule,
    // MatIconModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
  
    
    Ng2SearchPipeModule,
    MaterialModule
    
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
