import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {
  categories = ['work', 'personal', 'home']

  taskName
  taskDate
  taskPriority
  taskCategory

  taskObject
  constructor(public modalCtrl:ModalController) { }

  ngOnInit() {
  }
  async dismis(){
    await this.modalCtrl.dismiss()

  }
  selectedCategory (index){
    this.taskCategory = this.categories[index]
  }
  Addtask(){
    this.taskObject=({taskName:this.taskName, 
      itemDuedate:this.taskDate, 
      itemPriority:this.taskCategory.taskPriority, 
      itemCategory:this.taskCategory})

    this.dismis()
  }
}
