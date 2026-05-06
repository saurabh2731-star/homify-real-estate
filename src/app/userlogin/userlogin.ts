import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../auth';

@Component({
  selector: 'app-userlogin',
  imports: [CommonModule,RouterModule,HttpClientModule,ReactiveFormsModule],
  templateUrl: './userlogin.html',
  styleUrl: './userlogin.css'
})
export class Userlogin {

  authForm!: FormGroup;
  isLoginMode = true;
  message = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: Auth
  ) {}

  ngOnInit() {
    this.initForm();
  }

  toggleMode(event: Event) {
    event.preventDefault();
    this.isLoginMode = !this.isLoginMode;
    this.initForm();
  }

  private initForm() {
    if (this.isLoginMode) {
    this.authForm = this.fb.group({
  name: [''], // always define 'name' control
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]],
  confirmPassword: [''], // define confirmPassword too for signup
  rememberMe: [false]    // optional, used only in login
});

    } else {
      this.authForm = this.fb.group(
        {
          name: ['', [Validators.required, Validators.maxLength(30)]],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required],
        },
        { validators: this.passwordsMatchValidator }
      );
    }
  }

  passwordsMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
  if (this.authForm.invalid) return;

  const formData = this.authForm.value;

  if (this.isLoginMode) {
    // LOGIN
    this.http
      .post<{ message: string }>('http://localhost:8080/api/auth/login', {
        email: formData.email,
        password: formData.password
      })
      .subscribe({
        next: (res) => {
          this.message = res.message;

          if (res.message === 'Login successful') {
            this.authService.login();
            this.router.navigate(['/home']);
          }
        },
        error: (err) => {
          this.message = err.error.message || 'Login failed';
        },
      });

  } else {
    // SIGNUP
    this.http
      .post<{ message: string }>('http://localhost:8080/api/auth/signup', {
        name: formData.name,
        email: formData.email,
        password: formData.password
      })
      .subscribe({
        next: (res) => {
          this.message = res.message;
          this.toggleMode; // Flip to login after signup
        },
        error: (err) => {
          this.message = err.error.message || 'Signup failed';
        },
      });
  }
}

}
