import { Route } from '@angular/router';




export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '',
    loadComponent: () => import('./layout/layout.component').then(m => m.LayoutComponent),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./page/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'sales',
        loadComponent: () => import('./page/sales/sales.component').then(m => m.SalesComponent)
      }
    ]
  }
];
