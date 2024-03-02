import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirm_password: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  onPasswordChange() {
    if (this.registerForm !== undefined) {
      if (
        this.registerForm.value.confirm_password ==
        this.registerForm.value.password
      ) {
        this.registerForm.controls['confirm_password'].setErrors(null);
      } else {
        this.registerForm.controls['confirm_password'].setErrors({
          mismatch: true,
        });
      }
    }
  }

  onSubmit() {
    console.log(this.registerForm);
  }
}
