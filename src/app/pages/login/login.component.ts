import {Component} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {FormControl, FormGroup, NonNullableFormBuilder, Validators} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule, NgOptimizedImage],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loading: boolean = false;
  form: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
  }> = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100), Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(100)]],
  });

  constructor(private fb: NonNullableFormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private messageService: NzMessageService,
              private userService: UserService) {
  }

  login(): void {
    if (this.form.valid) {
      this.loading = true;
      this.userService.login(this.form.getRawValue()).subscribe({
        next: (res) => {
          this.router.navigate(['/login'])
          this.messageService.success('Login efetuado com sucesso!');
        },
        error: err => {
          this.messageService.error('Usuário ou senha incorretos.');
          console.error(err);
        },
      });
      this.loading = false;

    }
  }
}
