import { Component } from '@angular/core';
import { ITask } from 'src/app/Interfaces/task.interface';
import { TaskDifficulty, TaskLevel, TaskStatus } from 'src/app/constants/constants.enum';
import { LocalStoreService } from 'src/app/services/store/local-store.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  constructor(private taskService: TasksService) { }

  task: ITask = {
    name: '',
    description: '',
    dueDate: '',
    startDate: '',
    level: TaskLevel.NOT_STARTED,
    difficulty: TaskDifficulty.STANDARD,
    status: TaskStatus.PROCESSING,
    userId: '',
    id: 0
  }

  saveTask() {
    // implement some form validators here
    if (this.task.name.length < 5 || this.task.description.length < 20) {
      alert('Name or description has an invalid length')
    }
    this.task.id = Date.now();
    this.taskService.addTask(this.task);
  }

}
