import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnChanges {

  // input property used for parent-child interaction
  @Input() notificationNumber: number = 0;
  @Input() notificationList = 0;


  ngOnChanges(changes: SimpleChanges): void {
    console.log('This is from navbar => ', changes);
  }
}
