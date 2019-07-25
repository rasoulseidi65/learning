import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MDBModalRef} from 'angular-bootstrap-md';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  addressForm = this.fb.group({
    email: [null, Validators.required]
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
