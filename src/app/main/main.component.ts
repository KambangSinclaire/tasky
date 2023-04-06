import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import { IUser } from '../Interfaces/user.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnChanges {

  @Input() stateValue: any;

  // Child-Parent communication
  @Output() registerSuccess: EventEmitter<IUser> = new EventEmitter();

  username = '';
  email = '';
  password = '';
  canUndo = false;
  canRedo = false;

  // Deps injection
  constructor(private userService: UsersService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['stateValue'].currentValue) {
      this.canUndo = true;
    }

    if (changes['stateValue'].previousValue) {
      this.canRedo = true;
    }
  }

  register(e: Event) {
    console.log(this.username, this.email, this.password);
    const response = this.userService.register({
      username: this.username,
      email: this.email,
      password: this.password
    });

    if (response.success) {
      this.registerSuccess.emit({
        username: this.username,
        email: this.email,
        password: this.password
      })
      return;
    }
    alert('User account creation failed!')
  }

  undo() {
    this.username = this.stateValue?.previousValue?.username;
    this.email = this.stateValue?.previousValue?.email;
    this.password = this.stateValue?.previousValue?.password;

  }
  redo() {
    this.username = this.stateValue?.currentValue?.username;
    this.email = this.stateValue?.currentValue?.email;
    this.password = this.stateValue?.currentValue?.password;
  }
}
