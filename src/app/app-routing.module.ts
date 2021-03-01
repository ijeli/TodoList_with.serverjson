import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModalComponent } from '../app/components/login-modal/login-modal.component';
import { TodoListComponent } from '../app/components/todo-list/todo-list.component';
import { ToDoListViewComponent } from '../app/components/to-do-list-view/to-do-list-view.component'

const routes: Routes = [
  {path: '', component: LoginModalComponent},
  {path: 'taskListViewDraft', component: TodoListComponent},
  {path: 'taskListView', component: ToDoListViewComponent},
  {path: 'taskListEdit', component: TodoListComponent, data : { edit : true }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginModalComponent, TodoListComponent]