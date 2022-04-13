import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { PasswordComponent } from './password/password.component';
import { ProfileComponent } from './profile/profile.component';

import { AdminaccountComponent } from './component/admin/adminaccount/adminaccount.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserloginComponent } from './userlogin/userlogin.component';

import { UserStatusPipe } from './user-status.pipe';

import { FriendsComponent } from './component/user/friends/friends.component';

import { AddtimelineComponent } from './addtimeline/addtimeline.component';

import { LandingpageComponent } from './landingpage/landingpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ProfilesComponent } from './profiles/profiles.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './component/user/home/home.component';
import { AdminloginComponent } from './component/admin/adminlogin/adminlogin.component';
import { NetworkComponent } from './component/user/network/network.component';
import { ViewtimelineComponent } from './component/user/viewtimeline/viewtimeline.component';
import { MytimelineComponent } from './component/user/mytimeline/mytimeline.component';
import { AdmindashboardComponent } from './component/admin/admindashboard/admindashboard.component';
import { AboutComponent } from './component/user/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    PasswordComponent,
    ProfileComponent,
    AdminaccountComponent,
    AdminloginComponent,
    UserloginComponent,
    UserStatusPipe,
    NetworkComponent,
    FriendsComponent,
    AddtimelineComponent,
    MytimelineComponent,
    ViewtimelineComponent,
    LandingpageComponent,
    AdmindashboardComponent,
    ProfilesComponent,
    HeaderComponent,
    SidenavComponent,
    AboutComponent,
    
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
