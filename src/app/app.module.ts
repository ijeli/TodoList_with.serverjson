import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoHeaderComponent } from './components/todo-header/todo-header.component';
import { TodoFooterComponent } from './components/todo-footer/todo-footer.component';
// import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { TodoListInteractionService } from './todo-list-interaction.service';
import { InteractionService } from './interaction.service';
import { ToDoListViewComponent } from './components/to-do-list-view/to-do-list-view.component';

@NgModule({
  declarations: [
    AppComponent,
    // TodoListComponent,
    TodoHeaderComponent,
    TodoFooterComponent,
    // LoginModalComponent
    routingComponents,
    ToDoListViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
