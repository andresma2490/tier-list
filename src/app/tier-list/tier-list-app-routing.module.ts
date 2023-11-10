import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tier-list/:id',
    loadChildren: () =>
      import('./pages/tier-list/tier-list.module').then(
        (m) => m.TierListModule,
      ),
  },
  {
    path: 'tier-maker/:id',
    loadChildren: () =>
      import('./pages/tier-maker/tier-maker.module').then(
        (m) => m.TierMakerModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TierListAppRoutingModule {}
