import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

interface token {
  token: string;
  expiresAt: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
}
