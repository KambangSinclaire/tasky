import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnChanges {

  // Deps injection
  constructor(private userService: UsersService) { }

  // Very useful lifecycle
  ngOnInit(): void {
    console.log('Ng on init just executed');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('This is in ngOnchanges - So I came first though second');
  }

  username = '';
  email = '';
  password = '';



  register(e: Event) {
    console.log(this.username, this.email, this.password);
    const response = this.userService.register({
      username: this.username,
      email: this.email,
      password: this.password
    });

    if (response.success) {
      alert('Wow...New User created with name ' + this.username);
      return;
    }

    alert('User account creation failed!')
  }
}
