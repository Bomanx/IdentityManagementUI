import { Component, OnInit } from '@angular/core';
import {MainService} from '../main.service';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {

  Users;

  constructor(private mSer: MainService) { }

  ngOnInit(): void {
    this.Users = this.mSer.getUsers();
  }

}
