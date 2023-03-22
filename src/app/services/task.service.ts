import { Injectable } from '@angular/core';
//how to use an observable for async data 1. import
import { Observable, of } from 'rxjs'

import {Task} from '../Task'
import {TASKS} from '../mock-tasks'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  //how to use an observable 2. set type as:Observable<xyz>
  getTasks(): Observable<Task[]> {
    // 3. save as var, wrap in of()
    const tasks = of(TASKS);
    return tasks
  }

  //using local file without observable 
  // getTasks(): Task[] {
  //   return TASKS;
  // }
}
