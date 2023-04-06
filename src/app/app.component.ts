import { Component } from '@angular/core';
import { IUser } from './Interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user?: IUser;
  userState: any;

  consumerForRegisterSuccess(data: IUser) {
    this.user = data;
  }

  consumerForUndoRedo(data: any) {
    this.userState = data;
  }
}
