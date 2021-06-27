import { Component } from '@angular/core';
import { TodoItem } from './todoItem';
import { TodoList } from './todoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  private list = new TodoList("bourdieu", this.getStoredItems())

  get userName():string{
    return this.list.user
  }

  get itemCount(): number{
      // return this.list.items.filter(item => !item.complete).length
      return this.items.length;
  }

  get items(): readonly TodoItem[]{
    return this.list.items.filter(item => this.showComplete || !item.complete);
  }

  addItem(newItem){
    if(newItem != "") this.list.addItem(newItem)
    this.storeItems()
  }

  removeItem(item){
    this.list.removeItem(item)
  }

  storeItems(){
    localStorage.setItem("items", JSON.stringify(this.list.items))
  }

  getStoredItems():TodoItem[]{
    const list = JSON.parse(localStorage.getItem('items'))
    const a = new TodoItem('adiconar tarefas')
    console.log(list)
    return list != null? list: [new TodoItem('adiconar tarefas')]
  }

  showComplete: boolean = true;
}



