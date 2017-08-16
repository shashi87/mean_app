import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }      from '@angular/http';
import { FormsModule }      from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { routes }      from './app.router';
import {AppComponent}   from './app.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {AboutComponent} from './components/about/about.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AlertComponent} from './components/alert/alert.component';
import { AlertService, AuthenticationService, UserService } from './services/index';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule,routes,],
  declarations: [AppComponent, TasksComponent, AboutComponent, HomeComponent, LoginComponent, RegisterComponent, AlertComponent],
   providers: [
        AlertService,
        AuthenticationService,
        UserService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
