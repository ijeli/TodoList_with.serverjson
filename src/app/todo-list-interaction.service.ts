import { HttpClient } from '@angular/common/http';
import { ToDo } from './interfaces/to-do';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListInteractionService {

  // private _url: string = "/assets/data/todos.json"
  private _url: string = "http://localhost:3000/todos/";


  constructor(
    private http: HttpClient,
  ) { }

  getTodoListItems(): Observable<ToDo[]>{
    return this.http.get<ToDo[]>(this._url)
  }

  postToDoListItem(postData: ToDo) {
    return this.http.post(this._url, postData)
      .toPromise()
      .then((data: any) => {
        console.log(data)
      })
  }

  deleteTodoListItems(id:number) {
    return this.http.delete(this._url+(id))
  }

  updateToDoListItem(updateData: ToDo) {
    return this.http.put(this._url+(updateData.id), updateData)
      .toPromise()
  }
}
