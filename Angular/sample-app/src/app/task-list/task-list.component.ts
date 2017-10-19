import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private taskService: TaskService) { 
    this.taskService.getTasks()
      .then( tasks => this.tasks = tasks )
      .catch( err => console.log('failed to get thing', err))
  }

  tasks = []

  ngOnInit() {
  }

}
