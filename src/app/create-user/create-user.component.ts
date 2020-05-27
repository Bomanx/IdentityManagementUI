import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  UserForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });
  router: Router;

  constructor(private r: Router) {
    this.router = r;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.UserForm.controls.name.value);
    console.log(this.UserForm.controls.description.value);
    console.log(this.UserForm.controls.email.value);
    alert('User created!');
  }

  cancel() {
    this.router.navigate(['Landing']);
  }
}
