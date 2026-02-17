import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth-service';
import { supabase } from '../../../services/supabase.client';

export const passwordMatchValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const parent = control.parent;
  const password = parent?.get('password')?.value;
  const confirmPassword = control.value;

  if (!parent || !password || !confirmPassword) return null;

  return password === confirmPassword ? null : { passwordMismatch: true };
};

type AuthMode = 'login' | 'register';

interface CopyText {
  title: string;
  primary: string;
  subtitle: string;
  switchPrefix: string;
  switchAction: string;
}

@Component({
  selector: 'app-authpage',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './authpage.html',
  styleUrl: './authpage.css',
})
export class AuthPage {
  authService = inject(AuthService);
  finaxilogo = 'finaxi-logo.png';
  private router = inject(Router);
  mode = signal<AuthMode>('login');
  showPassword = signal(false);
  formBuilder = inject(FormBuilder);
  requestErrorMessage = signal('');

  authForm = new FormGroup<{ [key: string]: AbstractControl }>({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  currentYear = new Date().getFullYear();
  cardClasses =
    'relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/10 before:via-white/0 before:to-white/5 before:blur-2xl before:opacity-70';

  copy = computed<CopyText>(() => {
    return this.mode() === 'login'
      ? {
          title: 'Welcome back',
          subtitle: 'Sign in to your finaxi dashboard',
          primary: 'Sign in',
          switchPrefix: "Don't have an account?",
          switchAction: 'Create one',
        }
      : {
          title: 'Create an account',
          subtitle: 'Start tracking budgets and transactions',
          primary: 'Create account',
          switchPrefix: 'Already have an account?',
          switchAction: 'Sign in',
        };
  });

  togglePasswordVisibility() {
    this.showPassword.update((value) => !value);
  }

  async onSubmit() {
    if (this.authForm.invalid) {
      return;
    }

    const currentMode = this.mode();

    if (currentMode === 'register') {
      const { email, password, username } = this.authForm.value;
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username: username,
          },
        },
      });

      if (error) {
        console.warn(error);
      }

      if (data.user) {
        await this.createUserProfile(email, username);
        this.router.navigate(['/dashboard']);
      }
    } else {
      const { email, password } = this.authForm.value;

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.log(error);
        this.requestErrorMessage.set(error.message);
      } else {
        this.router.navigate(['dashboard']);
      }
    }
  }

  async createUserProfile(email: string, username: string) {
    try {
      // Grab access token from Supabase session
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();

      if (sessionError) {
      console.error('Error getting Supabase session', sessionError);
      this.requestErrorMessage.set('Failed to retrieve authentication token.');
      return;
      }

      const accessToken = sessionData?.session?.access_token;
      if (!accessToken) {
      console.error('No access token available in session', sessionData);
      this.requestErrorMessage.set('No auth token available to create remote profile.');
      return;
      }

      // Call external .NET API to create user profile with Bearer token
      const res = await fetch('https://localhost:7062/api/UserProfile/CreateUserProfile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        username: username,
        email: email,
      }),
      });

      if (!res.ok) {
      const text = await res.text();
      console.error('Error creating user profile via API', res.status, text);
      this.requestErrorMessage.set('Failed to create remote user profile.');
      return;
      }

      const result = await res.json();
      console.log('User profile created successfully!', result);
    } catch (err) {
      console.error('Unexpected error creating user profile', err);
      this.requestErrorMessage.set('Unexpected error creating user profile.');
    }
  }

  toggleMode(): void {
    this.mode.update((m) => {
      const newMode = m === 'login' ? 'register' : 'login';

      if (newMode === 'register') {
        this.authForm.addControl('username', new FormControl('', Validators.required));
        this.authForm.addControl(
          'confirmPassword',
          new FormControl('', [
            Validators.required,
            Validators.minLength(8),
            passwordMatchValidator,
          ]),
        );
      } else {
        this.authForm.removeControl('username');
        this.authForm.removeControl('confirmPassword');
      }

      return newMode;
    });
  }

  onForgotPassword(event: Event): void {
    event.preventDefault();
    alert('Demo: send reset email flow');
  }
}
