import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.css']
})
export class AuthButtonComponent {
  // Inject the authentication service into your component through the constructor
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}


  logOut():void{
    console.log(localStorage.getItem('islogged'));
    localStorage.clear();
    this.auth.logout({ returnTo: document.location.origin })
  }

  logIn():void{
    this.auth.loginWithRedirect({ appState: { target: '/file' } })
    localStorage.setItem('islogged', 'true');
  }

}