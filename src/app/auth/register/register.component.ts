import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';


  constructor(private userService: UsersService) { }

  register(e: Event) {
    console.log(this.username, this.email, this.password);
    const response = this.userService.register({
      username: this.username,
      email: this.email,
      password: this.password
    });

    // if (response.success) {
    //   this.registerSuccess.emit({
    //     username: this.username,
    //     email: this.email,
    //     password: this.password
    //   })
    //   return;
    // }
    alert('User account creation failed!')
  }

}
