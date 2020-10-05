import { Component, Inject, OnInit } from '@angular/core';
import { TodoListService } from '../todoList.service';
import { TEMA } from '../app.module';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css'],
  providers: [TodoListService]
})
export class C2Component implements OnInit {

  todoListService: TodoListService;

  constructor(todoListService: TodoListService, @Inject(TEMA) public tema: string) {
    this.todoListService = todoListService;
  }

  ngOnInit(): void {
  }

}
