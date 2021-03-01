import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/interaction.service';

@Component({
  selector: 'todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss']
})
export class TodoHeaderComponent implements OnInit {

  isLoggedin: boolean = false;
  displayName: string = '';

  displayMessage: any 

  constructor(private _interationService: InteractionService) { }

  ngOnInit(): void {
    this._interationService.didLogin$
      .subscribe(
        value => {
          this.isLoggedin = value.isLog;
          this.displayName = value.name;

          this.displayMessage = new Promise( (resolve, reject) => {
            if(this.isLoggedin==true) {
              setTimeout(() => {
                resolve(`Greetings ${this.displayName}, we have tasks to do...`);
              }, 3000 );
            }
          })
        }
      )
  }

  logOutBuddy() {
    this._interationService.didYouLogin({isLog: false, name: ''})
  }
}
