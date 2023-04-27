import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { UsersService } from './services/users/users.service';
import { LocalStoreService } from './services/store/local-store.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';
import { TaskDetailsComponent } from './tasks/task-details/task-details.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    AddTaskComponent,
    TaskListComponent,
    EditTaskComponent,
    TaskDetailsComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UsersService, LocalStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
