import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InteractionService } from 'src/app/interaction.service';
import { ToDo } from 'src/app/interfaces/to-do';
import { TodoListInteractionService } from 'src/app/todo-list-interaction.service';

@Component({
  selector: 'app-to-do-list-view',
  templateUrl: './to-do-list-view.component.html',
  styleUrls: ['./to-do-list-view.component.scss']
})
export class ToDoListViewComponent implements OnInit {

  todos$: Observable<ToDo[]> | undefined;
  isLoggedin: boolean = false;

  constructor(
    private _todoListsInteractionService: TodoListInteractionService,
    private _interactionServer: InteractionService,
  ) { }

  ngOnInit(): void {
    this._interactionServer.didLogin$.subscribe(value => this.isLoggedin = value.isLog);
    this.updateTodo();
  }

  toggleTodo(id:number) {
    this.todos$?.subscribe(res => {
      res.map(data => {
        if (data.id == id) {
          data.completed = !data.completed;
        }
      })
    })

    // this.todos.map((v: { completed: boolean; }, i: number) => {
    //   if (i == id) v.completed = !v.completed;
    //   return v;
    // })
  }

  updateTodo() {
    this.todos$ = this._todoListsInteractionService.getTodoListItems();
  }

}
