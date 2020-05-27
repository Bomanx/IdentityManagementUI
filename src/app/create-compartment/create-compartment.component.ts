import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-compartment',
  templateUrl: './create-compartment.component.html',
  styleUrls: ['./create-compartment.component.css']
})
export class CreateCompartmentComponent implements OnInit {
  CompartmentForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.CompartmentForm.controls.name.value + ' ' + this.CompartmentForm.controls.description.value);
    alert('Compartment created!');
  }
}
