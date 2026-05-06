import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from './auth';  // Import the Auth service

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);   // Inject the instance of Auth service
  const router = inject(Router);  // Inject the Router

  // Check if the user is logged in using the injected instance
  if (auth.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/login']);  // Navigate to login if not logged in
    return false;
  }
};
