import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs"

@Injectable()
export class TaskService {

  constructor(private http : Http) { }

  tasks = ['Drink coffee', 'Watch movie']

  getTasks(){
    return this.http.get('/tasks').map(data => data.json()).toPromise()
  }

  setTasks(task){
    this.tasks.push(task)
  }

}
