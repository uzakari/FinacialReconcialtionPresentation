import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    isCollapsed: boolean = false;
    loginLogoutText = 'Login';
    isLogged = '';

    constructor(@Inject(DOCUMENT) public document: Document,public auth: AuthService) { }

    ngOnInit() {

      console.log(localStorage.getItem('islogged'))

      if (localStorage.getItem('islogged')) {
        this.isLogged = 'true'
      }

    }

    
  logOut():void{
    console.log(localStorage.getItem('islogged'));

    localStorage.clear();
    this.auth.logout({ returnTo: document.location.origin });
    
  }

  public logIn():void{
    this.auth.loginWithRedirect({ appState: { target: '/file' } })
    localStorage.setItem('islogged', 'true');

  }
}
