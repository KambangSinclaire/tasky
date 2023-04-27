import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITask } from 'src/app/Interfaces/task.interface';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

  task: ITask | any;
  taskId: string | number = 0;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data: any) => {
      this.taskId = data?.id;

      // fetch task with the id found
      // upadte the task property of this component so it can reflect on the UI
    });
  }



}
