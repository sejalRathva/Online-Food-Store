import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showPassword = false;

  loginForm = new UntypedFormGroup({
    userName: new UntypedFormControl('', Validators.required),
    password: new UntypedFormControl('', Validators.required),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {}

  submit() {
     
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
  }
}
