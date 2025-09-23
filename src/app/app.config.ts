import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { publicRoutes } from './public/public.routes';
import { authRoutes } from './auth/auth.routes';
import { dashboardRoutes } from './dashboard/dashboard.routes';

// Combine all route definitions
export const routes: Routes = [
  ...publicRoutes,
  {
    path: 'auth',
    children: authRoutes
  },
  {
    path: 'dashboard',
    children: dashboardRoutes
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync()
  ]
};
