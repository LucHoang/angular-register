import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  contactForm = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(6)]),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl(),
    address:new FormGroup({
      city: new FormControl(),
      street: new FormControl(),
      pincode:new FormControl()
    })
  });
  countryList = [
    {id: 1, name: 'Viet Nam'},
    {id: 2, name: 'Hoa Ky'},
    {id: 3, name: 'Canada'},
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }

}
