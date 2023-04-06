import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { IUser } from '../Interfaces/user.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnChanges {

  @Input() registeredUser?: IUser;
  @Output() undoRedo: EventEmitter<any> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    this.undoRedo.emit(changes['registeredUser']);
  }


}
