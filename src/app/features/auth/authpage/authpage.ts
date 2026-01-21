import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
  imports: [CommonModule, FormsModule],
  templateUrl: './authpage.html',
  styleUrl: './authpage.css',
})
export class AuthPage {
  finaxilogo = 'finaxi-logo.png';
  private router = inject(Router);
  mode = signal<AuthMode>('login');
  showPassword = signal(false);
  name = signal('');
  email = signal('');
  password = signal('');
  confirmPassword = signal('');
  error = signal('');

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

  resetErrors() {
    this.error.set('');
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.resetErrors();

    //validation
    const emailPattern = /.+@.+\..+/;
    if (!emailPattern.test(this.email())) {
      this.error.set('Enter a valid email');
      return;
    }

    if (this.password().length >= 8) {
      this.error.set('Password must be at least 8 characters long.');
      return;
    }

    if (this.mode() === 'register') {
      if (!this.name().trim()) {
        this.error.set('Please enter your name.');
        return;
      }

      if (this.password() !== this.confirmPassword()) {
        this.error.set('Passwords do not match');
        return;
      }

      this.router.navigate(['/dashboard']);
    }
  }

  toggleMode(): void {
    this.resetErrors();
    this.mode.update((m) => (m === 'login' ? 'register' : 'login'));
  }

  onForgotPassword(event: Event): void {
    event.preventDefault();
    alert('Demo: send reset email flow');
  }
}
