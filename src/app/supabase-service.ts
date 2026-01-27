import { Injectable } from '@angular/core';
import {
  AuthChangeEvent,
  createClient,
  SupabaseClient,
  User,
  Session,
} from '@supabase/supabase-js';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  async getUser(): Promise<User | null> {
    const { data, error } = await this.supabase.auth.getUser();
    if (error) {
      return null;
    }
    return data.user;
  }

  authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
    return this.supabase.auth.onAuthStateChange(callback);
  }

  signInWithEmailAndPassword(email: string, password: string) {
    return this.supabase.auth.signInWithPassword({ email, password });
  }

  signInWithOTP(email: string) {
    return this.supabase.auth.signInWithOtp({ email });
  }

  signOut() {
    return this.supabase.auth.signOut();
  }
}
