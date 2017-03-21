import { Component, OnInit } from '@angular/core';
import { DemoService } from './demo.service';
import { Account } from './account';

@Component({
  templateUrl: 'demo.component.html',
  providers: [DemoService]
})
export class DemoComponent implements OnInit {
  errorMessage: string;
  users: Account[];
  roleName: string;
  roleDesc: string;
  parentID: 0;
  mode = 'Observable';

  constructor(private accountService: DemoService) { }

  ngOnInit() {
    // this.getUsers();
    this.addRole();
  }

  getUsers() {
    this.accountService.getHeroes()
      .subscribe(
      users => this.users = users,
      error => this.errorMessage = <any>error);
  }

  addRole() {
    this.accountService.addRole()
      .subscribe(
      (res) => {
        debugger;
      },
      error => this.errorMessage = <any>error);
  }
}
