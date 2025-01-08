import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavVisibilityServiceService } from 'src/app/core/Services/Nav/nav-visibility-service.service';
import { UserService } from 'src/app/core/Services/User/user.service';
import { IUserRegister } from 'src/app/Shared/interfaces/IUserRegister';
import { PasswordsMatchValidator } from 'src/app/Shared/validators/password_match_validator';

@Component({
  selector: 'app-ragister',
  templateUrl: './ragister.component.html',
  styleUrls: ['./ragister.component.css'],
})
export class RagisterComponent {
  showPassword = false;
  registerForm!: FormGroup;
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
    this.registerForm = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(5)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(5)]],
        confirmPassword: ['', Validators.required],
        address: ['', [Validators.required, Validators.minLength(10)]],
      },
      {
        validators: PasswordsMatchValidator('password', 'confirmPassword'),
      }
    );
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }
  ngOnDestroy() {
    this.navService.showNav();
  }
  get fc() {
    return this.registerForm.controls;
  }
  submit() {
    this.isSubmitted = true;
    if (this.registerForm.invalid) return;
    const fv = this.registerForm.value;
    const user: IUserRegister = {
      name: fv.name,
      email: fv.email,
      password: fv.password,
      confirmPassword: fv.confirmPassword,
      address: fv.address,
    };
    this.userService.register(user).subscribe((_) => {
      this.router.navigateByUrl(this.returnUrl);
    });
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
  }
}
