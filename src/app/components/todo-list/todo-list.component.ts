import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { InteractionService } from 'src/app/interaction.service';
import { ToDo } from '../../interfaces/to-do';
import {TodoListInteractionService} from '../../todo-list-interaction.service'

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [
    TodoListInteractionService
  ]
})
export class TodoListComponent implements OnInit {

  todos$: Observable<ToDo[]> | undefined;

  todos: ToDo[] = []
  allTodos: ToDo[] = []

  isLoggedin: boolean = false;
  inputTodo: string = '';
  todoTempContent: string = ''; 

  viewEdit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private _todoListsInteractionService: TodoListInteractionService,
    private _interactionServer: InteractionService,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(v => this.viewEdit = v.edit);
    this._interactionServer.didLogin$.subscribe(value => this.isLoggedin = value.isLog);
    this.updateTodo();

  }

  deleteTodo(id:number) {
    this._todoListsInteractionService.deleteTodoListItems(id).subscribe(() => {
      this.updateTodo();
    })
  }

  toggleTodo(id:number) {
    this.todos.map((v: { completed: boolean; }, i: number) => {
      if (i == id) v.completed = !v.completed;
      return v;
    })
  }

  addTodo() {
    if (this.inputTodo.trim().length === 0) {return alert('Please insert a value')}

    let postPackage: ToDo = {
      content: this.inputTodo,
      edit: false,
      completed: false,
      id: this.allTodos[this.allTodos.length -1].id + 1
    };

    this._todoListsInteractionService.postToDoListItem(postPackage).then(() => {
      this.updateTodo();
    })

    this.inputTodo = '';
  }

  toggleEditTodo(todo:ToDo) {
    todo.edit = !todo.edit
  }

  toggleCompleteTodo(todo:ToDo) {
    todo.completed = !todo.completed
  }

  updateTodo() {
    this._todoListsInteractionService.getTodoListItems().subscribe(update => {
      this.allTodos = update
      let filteredTodos = update.filter(data => data.completed === false)
      this.todos = filteredTodos
    })
    return this.todos;
    // this.todos$ = this._todoListsInteractionService.getTodoListItems();
  }

  updateTodoItem(task:ToDo) {
    if (task.edit == false) {return alert('')}

    let getSingleTodo = this.todos.filter((data: { id: number; }) => data.id == task.id)
    this.toggleEditTodo(getSingleTodo[0]);
    this._todoListsInteractionService.updateToDoListItem(getSingleTodo[0]).then(() => this.updateTodo())
    
    // this.todos$?.subscribe(res => { 
    //   res.map(data => {
    //     if (data.id == task.id) {
    //       this.toggleEditTodo(data);
    //       this._todoListsInteractionService.updateToDoListItem(data).then(() => this.updateTodo())
    //     }
    //   })
    // });
  }

  completeTodoItem(task:ToDo) {
    let confirmComplete = confirm('Confirm Completion?');
    if (confirmComplete) {
      let getSingleTodo = this.todos.filter((data: { id: number; }) => data.id == task.id)
      this.toggleCompleteTodo(getSingleTodo[0]);
      this._todoListsInteractionService.updateToDoListItem(getSingleTodo[0]).then(() => this.updateTodo())  
    }
    else {return}
  }
}
