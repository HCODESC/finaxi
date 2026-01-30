import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SupabaseService } from '../../../supabase-service';

type AuthMode = 'login' | 'register';

interface CopyText {
  title: string;
  subtitle: string;
  primary: string;
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
  supabaseClient = inject(SupabaseService);
  finaxilogo = 'finaxi-logo.png';
  private router = inject(Router);
  mode = signal<AuthMode>('login');
  showPassword = signal(false);
  formBuilder = inject(FormBuilder);

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
      const { error } = await this.supabaseClient.register(email, username, password);
      if (error) {
        console.warn(error);
      } else {
        this.router.navigate(['/dashboard']);
      }
    } else {
      const { email, password } = this.authForm.value;

      const { error } = await this.supabaseClient.signInWithEmailAndPassword(email, password);

      if (error) {
        console.log(error);
      } else {
        this.router.navigate(['dashboard']);
      }
    }

    console.log(this.authForm.value);
  }

  toggleMode(): void {
    this.mode.update((m) => {
      const newMode = m === 'login' ? 'register' : 'login';

      if (newMode === 'register') {
        this.authForm.addControl('username', new FormControl('', Validators.required));
        this.authForm.addControl('confirmPassword', new FormControl('', Validators.required));
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

  signout(): void {
    this.supabaseClient.signOut();
  }
}
