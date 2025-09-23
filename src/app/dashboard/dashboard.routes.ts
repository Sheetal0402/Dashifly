import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/dashboard-layout.component').then(m => m.DashboardLayoutComponent),
    children: [
      {
        path: 'overview',
        loadComponent: () => import('./pages/overview/overview.component').then(m => m.OverviewComponent)
      },
      {
        path: 'onboarding',
        loadComponent: () => import('./pages/onboarding/onboarding.component').then(m => m.OnboardingComponent)
      },
      {
        path: 'settings',
        loadComponent: () => import('./pages/settings/settings.component').then(m => m.SettingsComponent)
      },
      {
        path: 'billing',
        loadComponent: () => import('./pages/billing/billing.component').then(m => m.BillingComponent)
      },
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      }
    ]
  }
];