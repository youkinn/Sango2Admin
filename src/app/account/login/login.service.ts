import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Account } from '../Account';
@Injectable()
export class LoginService {
    private url = '';  // URL to web API
    constructor(private http: Http) { }
}