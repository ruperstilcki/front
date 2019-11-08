import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VrsteGljivaComponent } from './vrste-gljiva/vrste-gljiva.component';

const routes: Routes = [
  { path: 'home', component: VrsteGljivaComponent },
  { path: 'vrste-gljiva', component: VrsteGljivaComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule {}
