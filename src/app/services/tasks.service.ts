import { Injectable } from '@angular/core';
import { LocalStoreService } from './store/local-store.service';
import { ITask } from '../Interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private store: LocalStoreService) { }

  // add task
  addTask(task: ITask) {
    let tasks = this.store.get('Tasks');
    if (tasks.status && tasks.data.length > 1) {
      tasks.data.push(task);
      this.store.set('Tasks', tasks);
      return;
    }
    this.store.set('Tasks', [task]);
    return;
  }

  // edit
  editTask() { }

  // delete
  deleteTask() { }

  // get one
  getTaskById() { }

  // get all
  getTasks() {
    return this.store.get('Tasks');
  }

  // get by user
  getUserTask() { }
}
