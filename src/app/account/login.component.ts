import { Component, OnInit } from '@angular/core';
import { LoginService } from './login/login.service';
import { Account } from './account';

@Component({
  templateUrl: 'login.component.html',
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  users: Account[];
  mode = 'Observable';

  constructor(private accountService: LoginService) { }

  ngOnInit() {
    // todo
  }
}
