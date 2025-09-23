import { Routes } from '@angular/router';

export const publicRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'features',
    loadComponent: () => import('./features/features.component').then(m => m.FeaturesComponent)
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pricing/pricing.component').then(m => m.PricingComponent)
  },
  {
    path: 'faq',
    loadComponent: () => import('./faq/faq.component').then(m => m.FaqComponent)
  }
];