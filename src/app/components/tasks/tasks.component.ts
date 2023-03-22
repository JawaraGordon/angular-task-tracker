import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service'
import {Task} from '../../Task'


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
  tasks: Task[] = []

  constructor(private taskService: TaskService) { 
    
  }

  ngOnInit(): void {
// setting func to allow observability 
    this.taskService.getTasks().subscribe((tasks)=>{this.tasks = tasks})

    //use func context to show data
    // this.tasks = this.taskService.getTasks()
  }

}
