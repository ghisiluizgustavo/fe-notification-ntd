import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/notifications/notifications.page').then(m => m.NotificationsPage)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
