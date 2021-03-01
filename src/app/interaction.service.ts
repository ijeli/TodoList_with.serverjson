import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  ss: any = sessionStorage.getItem("obj");

  private _didLogin = new BehaviorSubject<any>({
    isLog: false,
    name: null
  });
  didLogin$ = this._didLogin.asObservable();

  constructor() { }



  get didLogin(): any {
    return this._didLogin.getValue();
  }

  set didLogin(val: any) {
    this._didLogin.next(val)
  }

  didYouLogin(val: any) {
    this._didLogin.next(val);
  }

}

// private _loggedInSource = new Subject<boolean>();
// loggedIn$ = this._loggedInSource.asObservable();
// isLoggedIn(logged: boolean) {
//   this._loggedInSource.next(logged);
// }
