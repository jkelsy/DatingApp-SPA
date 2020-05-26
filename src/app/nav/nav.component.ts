import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  login(){
    this.auth.login(this.model).subscribe(next => {
      console.log('logged successfuly');
    }, error => {
      console.log('login failed ' +error.message);
    });
  }

  loggedIn(){
    const token = localStorage.getItem('token');
    return token != null;
  }

  logout(){
    console.log('logged out');
    localStorage.removeItem('token');
    console.log('logged out');
  }

}
