import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccoutDetailsPage } from './accout-details.page';

const routes: Routes = [
  {
    path: '',
    component: AccoutDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccoutDetailsPageRoutingModule {}
