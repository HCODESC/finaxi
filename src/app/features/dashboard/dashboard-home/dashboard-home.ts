import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../../auth-service';
import { supabase } from '../../../supabase.client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-home',
  imports: [],
  templateUrl: './dashboard-home.html',
  styleUrl: './dashboard-home.css',
})
export class DashboardHome {
  private auth = inject(AuthService);
  router = inject(Router);
  readonly profile = computed(() => this.auth.user());
  readonly userId = computed(() => this.profile);

  signout(): void {
    console.log(this.auth.currentUser?.email);
    supabase.auth.signOut();
    console.log(this.auth.currentUser);
    this.router.navigate(['/']);
  }
}
