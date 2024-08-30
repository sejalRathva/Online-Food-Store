import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  showPassword = false;
  showConfirmPassword = false;

  resetpasswordForm = new UntypedFormGroup({
    newPassword: new UntypedFormControl(''),
    confirmNewPassword: new UntypedFormControl(''),
    tempToken: new UntypedFormControl(''),
  });
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((res: any) => {
      this.resetpasswordForm.controls['tempToken'].setValue(res.tempToken);
    });
  }

  async resetpassword() {
   
  }
  toggleShow(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmShow(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}
