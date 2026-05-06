import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  isUserLoggedIn = false;  // Track login state

  login() {
    this.isUserLoggedIn = true;  // Log in the user
  }

  logout() {
    this.isUserLoggedIn = false;  // Log out the user
  }

  isLoggedIn(): boolean {
    return this.isUserLoggedIn;  // Return the current login state
  }
}
