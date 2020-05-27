import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  USERS = [
    {name: 'test1@oracle.com', status: 'active', email: 'test1@oracle.com', timeCreated: '05-20-2020'},
    {name: 'test2@oracle.com', status: 'active', email: 'test2@oracle.com', timeCreated: '04-20-2020'},
    {name: 'test3@oracle.com', status: 'inactive', email: 'test3@oracle.com', timeCreated: '03-20-2020'},
    {name: 'test4@oracle.com', status: 'active', email: 'test4@oracle.com', timeCreated: '02-20-2020'},
    {name: 'test5@oracle.com', status: 'inactive', email: 'test5@oracle.com', timeCreated: '01-20-2020'},
  ];

  getUsers(){
    return this.USERS;
  }
}
