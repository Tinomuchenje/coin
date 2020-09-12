import { NgModule } from '@angular/core';
import { LoginComponent } from '../app/login/login.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
