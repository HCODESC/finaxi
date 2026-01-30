import { Component, inject } from '@angular/core';
import { SupabaseService } from '../../../supabase-service';

@Component({
  selector: 'app-dashboard-home',
  imports: [],
  templateUrl: './dashboard-home.html',
  styleUrl: './dashboard-home.css',
})
export class DashboardHome {
  private supabaseClient = inject(SupabaseService);

  logout() {
    this.supabaseClient.signOut();
  }
}
