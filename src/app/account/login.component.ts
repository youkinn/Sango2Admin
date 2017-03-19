import { Component, OnInit } from '@angular/core';
import { AccountService } from './login/login.service';
import { Account } from './account';

@Component({
  templateUrl: 'login.component.html',
  providers: [AccountService]
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  users: Account[];
  mode = 'Observable';

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    debugger;
    this.getUsers();
  }

  getUsers() {
    debugger;
    this.accountService.getHeroes()
      .subscribe(
      users => {
        debugger;
        this.users = users
      },
      error => this.errorMessage = <any>error);
  }
}
