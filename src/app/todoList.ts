import { TodoItem } from "./todoItem";
export class TodoList {
  constructor(public user: string, private todoItems: TodoItem[] = []) {

  }

  get items(): readonly TodoItem[] {
    return this.todoItems;
  }

  addItem(task: string) {
    this.todoItems.push(new TodoItem(task));
  }

  removeItem(item){
    const index = this.todoItems.indexOf(item)
    if(index > -1) this.todoItems.splice(index, 1)
  }




}
