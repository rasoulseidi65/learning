import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
   addressForm = this.fb.group({
    name: [null, Validators.required],
     lastname: [null, Validators.required],
     username: [null, Validators.required],
     email: [null, Validators.required],
     mobile: [null, Validators.required],
    password: [null, Validators.required],
     rpassword: [null, Validators.required],
  });
  constructor(private fb: FormBuilder) { }
  onSubmit() {
    // alert('Thanks!');
    console.log(this.addressForm.value);
  }

  ngOnInit() {
  }

}
