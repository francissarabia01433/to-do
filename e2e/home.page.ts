import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList = [{
    itemName :'Coding',
    itemDueDate : '13-10-21',
    itemPriority : 'high',
    itemCategory : 'Work'
  },
  {
    itemName :'Design',
    itemDueDate : '28-10-21',
    itemPriority : 'low',
    itemCategory : 'Work'
  },

  {
    itemName :'Shopping',
    itemDueDate : '30-10-21',
    itemPriority : 'middle',
    itemCategory : 'Personal'
  },

  {
    itemName :'Workout',
    itemDueDate : '30-10-21',
    itemPriority : 'middle',
    itemCategory : 'Personal'
  }
]

  today : number = Date.now()


  constructor() {}

}
