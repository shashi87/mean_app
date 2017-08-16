import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';

 const router: Routes = [
        { path: '',  component: LoginComponent },
        { path: 'home',  component: HomeComponent },
        { path: 'about',  component: AboutComponent },
        { path: 'tasks',  component: TasksComponent },
        { path: 'register',  component: RegisterComponent },
        { path: 'login',  component: LoginComponent }
      ];
export const routes = RouterModule.forRoot(router, {enableTracing: true});