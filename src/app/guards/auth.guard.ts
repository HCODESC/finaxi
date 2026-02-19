import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

export const authGuard: CanActivateFn = async () => {
  const platformId = inject(PLATFORM_ID);

  // On the server there is no localStorage / Supabase session — allow through
  if (!isPlatformBrowser(platformId)) {
    return true;
  }

  const auth = inject(AuthService);
  const router = inject(Router);

  await auth.waitForInitialization();

  if (auth.isAuthenticated()) {
    return true;
  }
  return router.createUrlTree(['/authpage']);
};
