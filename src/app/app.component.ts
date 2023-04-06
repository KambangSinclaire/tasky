import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  notifications = 0;
  allNotifications = 0;

  constructor() {
    setInterval(() => {
      this.notifications += 5;
      this.allNotifications += 2;
    }, 1000)
  }

  title = 'tasky';
  description = 'This is our great and amazing Angular project';

  // Data binding
  // => 1-way data binding
}
