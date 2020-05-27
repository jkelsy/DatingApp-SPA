import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public auth: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login(){
    this.auth.login(this.model).subscribe(next => {
      this.alertify.success('logged successfuly');
    }, error => {
      this.alertify.error(error);
    });
  }

  loggedIn(){
    return this.auth.loggedIn();
  }

  logout(){
    localStorage.removeItem('token');
    this.alertify.message('logged out');
  }

}
