import { Component, computed, inject, signal } from '@angular/core';
import { AuthService } from '../../../services/auth-service';
import { supabase } from '../../../services/supabase.client';
import { Router } from '@angular/router';
import {
  LucideAngularModule,
  Search,
  ChevronDown,
  Settings,
  Bell,
  ChartLine,
  SlidersHorizontal,
  CreditCard,
  Tag,
  Download,
  LogOut,
  Calendar,
  Plus,
  ListFilter,
  List,
} from 'lucide-angular';
import { ProfileService } from '../../../services/profile-service';
import { Card } from '../../components/card/card';

interface SideBarItems {
  label: string;
  icon: any;
  route?: string;
}

@Component({
  selector: 'app-dashboard-home',
  imports: [LucideAngularModule, Card],
  templateUrl: './dashboard-home.html',
  styleUrl: './dashboard-home.css',
})
export class DashboardHome {
  readonly search = Search;
  readonly bell = Bell;
  readonly plus = Plus;
  readonly listFilter = ListFilter;
  readonly calendar = Calendar;
  readonly chevronDown = ChevronDown;
  readonly settingsIcon = Settings;
  private auth = inject(AuthService);
  private profileService = inject(ProfileService);
  router = inject(Router);
  readonly logoutIcon = LogOut;

  sidebarItems: SideBarItems[] = [
    { label: 'Overview', icon: Search, route: '/dashboard' },
    { label: 'Budgets', icon: SlidersHorizontal, route: '/budgets' },
    { label: 'Transactions', icon: CreditCard, route: '/transactions' },
    { label: 'Categories', icon: Tag, route: '/categories' },
    { label: 'Reports', icon: Download, route: '/reports' },
    { label: 'Settings', icon: Settings, route: '/settings' },
  ];

  readonly userprofile = this.profileService.profile;

  signout(): void {
    supabase.auth.signOut();
    this.router.navigate(['/']);
  }
}
