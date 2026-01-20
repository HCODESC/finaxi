import { Routes } from '@angular/router';
import { AuthPage } from './features/auth/authpage/authpage';
import { App } from './app';
import { Home } from './features/landing/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'authpage',
    component: AuthPage,
  },
];
