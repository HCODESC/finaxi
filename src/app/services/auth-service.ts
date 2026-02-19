import { computed, Injectable, signal } from '@angular/core';
import { User } from '@supabase/supabase-js';
import { supabase } from './supabase.client';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user = signal<User | null>(null);
  private _initPromise: Promise<void>;
  private _initialized = false;

  user = this._user.asReadonly();

  isAuthenticated = computed(() => !!this._user());

  constructor() {
    this._initPromise = this.initializedAuth();
  }

  private async initializedAuth() {
    const { data } = await supabase.auth.getSession();
    this._user.set(data.session?.user ?? null);

    supabase.auth.onAuthStateChange((_event, session) => {
      this._user.set(session?.user ?? null);
    });

    this._initialized = true;
  }

  get currentUser(): User | null {
    return this._user();
  }

  waitForInitialization(): Promise<void> {
    return this._initPromise;
  }
}
