import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList = [{
    itemName :'Coding',
    itemDueDate : '10-10-22',
    itemPriority : 'high',
    itemCategory : 'Work'
  },
  {
    itemName :'Design',
    itemDueDate : '10-10-22',
    itemPriority : 'low',
    itemCategory : 'Work'
  },

  {
    itemName :'Shopping',
    itemDueDate : '10-10-22',
    itemPriority : 'middle',
    itemCategory : 'Personal'
  },

  {
    itemName :'Workout',
    itemDueDate : '10-10-22',
    itemPriority : 'high',
    itemCategory : 'Personal'
  }
]

  today : number = Date.now()


  constructor() {}

}
