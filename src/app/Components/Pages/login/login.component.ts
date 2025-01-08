import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavVisibilityServiceService } from 'src/app/core/Services/Nav/nav-visibility-service.service';
import { UserService } from 'src/app/core/Services/User/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  showPassword = false;
  loginForm!: FormGroup;
  isSubmitted = false;
  returnUrl = '';
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public navService: NavVisibilityServiceService
  ) {}

  ngOnInit(): void {
    this.navService.hideNav();

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }
  ngOnDestroy() {
    this.navService.showNav();
  }
  get fc() {
    return this.loginForm.controls;
  }
  submit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;

    this.userService
      .login({ email: this.fc.email.value, password: this.fc.password.value })
      .subscribe(() => {
        this.router.navigateByUrl(this.returnUrl);
      });
  }
  toggleShow() {
    this.showPassword = !this.showPassword;
  }
}
