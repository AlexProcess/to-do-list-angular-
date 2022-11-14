import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
//variables

taskList:  any[] = [
  {title: 'console.log barceló' ,isDone: true},
  {title: 'Ser bueno programando' ,isDone: false},
  {title: 'Ser bueno jugando al valorant' ,isDone: false},
  {title: 'Estar mamadisimo' ,isDone: true},
];


index: number = 0

anadirTarea: string =""

  constructor() { }

  ngOnInit(): void {
  }
//functions

  addTarea(anadirTarea: string){
    this.taskList.push({title: anadirTarea, isDone: false})
  }

  deleteTask(index:number){
    this.taskList.splice(index,1)
  }


  }
