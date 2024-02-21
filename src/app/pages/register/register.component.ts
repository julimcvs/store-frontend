import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import Validation from "../../utils/validation";
import {SharedModule} from "../../shared/shared.module";
import {NgOptimizedImage} from "@angular/common";
import {UserService} from "../../services/user/user.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedModule, NgOptimizedImage],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  loading: boolean = false;
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    birthDate: new FormControl(new Date),
    cpf: new FormControl(''),
  });
  formAddress: FormGroup = new FormGroup({
    number: new FormControl(''),
    street: new FormControl(''),
    state: new FormControl(''),
    zipCode: new FormControl(''),
    neighborhood: new FormControl('')
  });

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: NzMessageService,
    private userService: UserService = inject(UserService),
  ) {
  }

  ngOnInit() {
    this.formAddress = this.formBuilder.group({
      number: ['', [Validators.required, Validators.min(0), Validators.max(10000)]],
      street: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      state: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      neighborhood: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      zipCode: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
    });
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(100)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100), Validators.email]],
      birthDate: [new Date, [Validators.required]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      address: this.formAddress
    }, {
      validators: [Validation.match('password', 'confirmPassword')]
    });
  }

  register() {
    if (this.form.valid) {
      this.loading = true;
      this.userService.register(this.form.getRawValue()).subscribe({
        next: (res) => {
          this.router.navigate(['/login'])
          this.messageService.success('Usuário registrado com sucesso!');
        },
        error: err => {
          this.messageService.error('Erro ao registrar usuário.');
          console.error(err);
        },
      });
      this.loading = false;
    }
  }
}
