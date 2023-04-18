import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import { IUser } from '../Interfaces/user.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  // @Input() stateValue: any;

  // // Child-Parent communication
  // @Output() registerSuccess: EventEmitter<IUser> = new EventEmitter();



  // Deps injection


  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['stateValue'].currentValue) {
  //     this.canUndo = true;
  //   }

  //   if (changes['stateValue'].previousValue) {
  //     this.canRedo = true;
  //   }
  // }


  // undo() {
  //   this.username = this.stateValue?.previousValue?.username;
  //   this.email = this.stateValue?.previousValue?.email;
  //   this.password = this.stateValue?.previousValue?.password;

  // }
  // redo() {
  //   this.username = this.stateValue?.currentValue?.username;
  //   this.email = this.stateValue?.currentValue?.email;
  //   this.password = this.stateValue?.currentValue?.password;
  // }
}
