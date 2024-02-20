import {Component} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {FormControl, FormGroup, NonNullableFormBuilder, Validators} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule, NgOptimizedImage],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: FormGroup<{
    username: FormControl<string>;
    password: FormControl<string>;
  }> = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100), Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(100)]],
  });

  constructor(private fb: NonNullableFormBuilder) {
  }

  validateForm(): boolean {
    return this.form.valid;
  }

  submitForm(): void {
    console.log('submit', this.validateForm);
  }
}
