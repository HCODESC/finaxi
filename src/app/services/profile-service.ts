import { effect, inject, Injectable, signal } from '@angular/core';
import { AuthService } from './auth-service';
import { supabase } from './supabase.client';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

interface Profile {
  username: string;
  email: string;
  profileImageUrl?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient);
  private _profile = signal<Profile | null>(null);
  profile = this._profile.asReadonly();
  private _lastRequestId = 0;

  constructor(private auth: AuthService) {
    effect(() => {
      const user = this.auth.user();

      if (!user) {
        this._profile.set(null);
        return;
      }

      this.loadProfile();
    });
  }

  private async loadProfile() {
    const requestId = ++this._lastRequestId;

    try {
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();

      if (sessionError) {
        console.error('Error getting Supabase session', sessionError);
        return;
      }

      const accessToken = sessionData?.session?.access_token;
      if (!accessToken) {
        console.error('No access token available in session', sessionData);
        return;
      }

      const url = `${environment.apiUrl}/UserProfile`;
      const headers = new HttpHeaders({ Authorization: `Bearer ${accessToken}` });

      const profileData = await firstValueFrom(this.http.get<Profile>(`${url}/GetUserProfile`, { headers }));

      if (requestId !== this._lastRequestId) return; // ignore stale response

      this._profile.set(profileData);
    } catch (err: any) {
      console.error('Failed to load profile', err);
      if (err?.status === 401) {
        this._profile.set(null);
      }
    }
  }
}
