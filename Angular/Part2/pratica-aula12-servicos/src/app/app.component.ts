import { Component } from '@angular/core';
import { TodoListService } from './todoList.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoListService],
})
export class AppComponent {

  todoListService: TodoListService;

  constructor(todoListService: TodoListService) {
    this.todoListService = todoListService;
  }

  title = 'pratica-aula12-servicos';
}
