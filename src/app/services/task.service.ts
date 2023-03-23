import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
//how to use an observable for async data 1. import
import { Observable, of } from 'rxjs'

import {Task} from '../Task'
import {TASKS} from '../mock-tasks'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  //working with json server 
private apiUrl = 'http://localhost:3000/tasks'
//adding private context for http module  
constructor(private http:HttpClient) { }

// using http to fetch data in tasks func instead of file
getTasks(): Observable<Task[]> {
  return this.http.get<Task[]>(this.apiUrl)
}

  //how to use an observable 2. set type as:Observable<xyz>
  // getTasks(): Observable<Task[]> {
  //   // 3. save as var, wrap in of()
  //   const tasks = of(TASKS);
  //   return tasks
  // }
  
  
  //using local file without observable 
  // getTasks(): Task[] {
  //   return TASKS;
  // }
}
