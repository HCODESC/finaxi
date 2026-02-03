import { Routes } from '@angular/router';
import { AuthPage } from './features/auth/authpage/authpage';
import { Home } from './features/landing/home/home';
import { DashboardHome } from './features/dashboard/dashboard-home/dashboard-home';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'authpage',
    component: AuthPage,
  },
  {
    path: 'dashboard',
    component: DashboardHome,
    canMatch: [authGuard],
  },
];
