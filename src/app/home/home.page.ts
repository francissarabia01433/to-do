import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular/providers/modal-controller';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList = []

  today : number = Date.now()

  constructor(public modalCtrl:ModalController) { }

  async addTask() {
    const modal = await this.modalCtrl.create({
      component:AddNewTaskPage
    })

    modal.onDidDismiss().then(newTaskObj =>{
      console.log(newTaskObj.data );
      this.todoList.push(newTaskObj.data)
  })

  return await modal.present()
 }
 delete(index){
  this.todoList.splice(index,1)
 }
 
}
