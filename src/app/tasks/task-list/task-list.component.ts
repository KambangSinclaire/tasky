import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITask } from 'src/app/Interfaces/task.interface';
import { TaskDifficulty, TaskLevel, TaskStatus } from 'src/app/constants/constants.enum';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {


  tasks: ITask[] = [{
    name: 'Teach JavaScript',
    description: 'Js master class',
    status: TaskStatus.PAUSED,
    userId: '1',
    startDate: new Date(Date.now()),
    dueDate: "12/04/2023",
    level: TaskLevel.PROGRESS,
    difficulty: TaskDifficulty.MEDIUM,
    id: 1
  },
  {
    name: 'Teach Angular',
    description: 'Angular master class',
    status: TaskStatus.SUCCESS,
    userId: '2',
    startDate: new Date(Date.now() + 100),
    dueDate: "13/04/2023",
    level: TaskLevel.PROGRESS,
    difficulty: TaskDifficulty.HIGH,
    id: 2
  }]

  constructor(
    private taskService: TasksService,
    private myRouter: Router
  ) { }

  ngOnInit(): void {
    let allTasks = this.taskService.getTasks();
    this.tasks = [...this.tasks, ...allTasks.data];
  }

  gotoTaskDetails(taskId: number) {

    // This navigates to the route specified below appending taskId as the route params
    // This navigate function also takes an option object that lets you define the query params to be 
    // sent with the route specified.
    this.myRouter.navigate([`/task-details/${taskId}`],
      // {
      //   queryParams: {
      //     name: "kambang",
      //     age: 34
      //   }
      // }
    )
  }

}
