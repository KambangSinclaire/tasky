import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';
import { TaskDetailsComponent } from './tasks/task-details/task-details.component';
import { AuthGuard } from './Guards/auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';

// Define all the routes of your application
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: TaskListComponent
      }
    ]
  }, {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: RegisterComponent
  },
  {
    path: "tasks",
    component: TaskListComponent,
    children: [
      {
        path: "edit-task",
        component: EditTaskComponent
      }
    ]
  },
  {
    path: "add-task",
    component: AddTaskComponent
  },
  {
    path: "task-details/:id", // this -> (:id) is to specify that this route expects a ROUTE PARAMS
    component: TaskDetailsComponent,
    canActivate: [AuthGuard]
  },
  // always set the wildcard route at the end of your route config
  {
    path: "**",
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// 1) RouterModule class
// 2) router-outlet directive (selector) -.html
// user/login/profile
// localhost:4200