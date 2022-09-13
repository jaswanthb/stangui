import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './../auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  private formSubmitAttempt!: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      userName: ['admin', Validators.required],
      password: ['admin', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    // return (
    //   (!this.form.get(field).valid && this.form.get(field).touched) ||
    //   (this.form.get(field).untouched && this.formSubmitAttempt)
    // );
  }

  get f()
{
    return this.form.controls;
}
  onSubmit() {
    if (this.form.valid) {
      this.authService.login(this.form.value);
    }
    this.formSubmitAttempt = true;
  }
}
