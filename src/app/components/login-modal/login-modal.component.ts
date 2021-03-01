import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { InteractionService } from 'src/app/interaction.service';

@Component({
  selector: 'login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  // loggedIn: boolean = false;
  loggedIn: any

  inputUsername: string = "";
  inputPassword: string = "";
  displayUser: string = "";

  constructor(
    private _interationService: InteractionService
  ) { }

  ngOnInit(): void {
    this._interationService.didLogin$
    .subscribe(
      value => {
        this.loggedIn = value.isLog;
        this.displayUser = value.name;
      }
    )
  }

  loginAdmin() {
    if (this.inputUsername.trim().length === 0 || this.inputPassword.trim().length === 0)
      return alert('please enter value');

    if (this.inputUsername == "Admin" && this.inputPassword == "password") {
      this.sendSucessfulLogin()
      this._interationService.didLogin$
      .subscribe(
        value => {
          this.loggedIn = value.isLog;
        }
      )
    }
    else {
      alert("Login Failed");
    }

    this.inputUsername = "";
    this.inputPassword = "";
  }

  sendSucessfulLogin() {
    this._interationService.didYouLogin({isLog: true, name: this.inputUsername})
  }

}
