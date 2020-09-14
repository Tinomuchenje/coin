import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../pages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'transactions',
        loadChildren: () =>
          import('../pages/transactions/transactions.module').then(
            m => m.TransactionsPageModule
          )
      },
      {
        path: 'account-details',
        loadChildren: () =>
          import('../pages/accout-details/accout-details.module').then(
            m => m.AccoutDetailsPageModule
          )
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
