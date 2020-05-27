import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {
  GroupForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.GroupForm.controls.name.value);
    console.log(this.GroupForm.controls.description.value);
    alert('Group Created!');
  }
}
