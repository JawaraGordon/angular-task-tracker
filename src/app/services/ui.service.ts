import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UiService {
private showAddTask: boolean = false;
private subject = new Subject<any>();


  constructor() { }

  // set to void === not returning anything
toggleAddTask(): void {
  this.showAddTask = !this.showAddTask;
  this.subject.next(this.showAddTask);
}

onToggle(): Observable<any> {
  return this.subject.asObservable()
}

}
