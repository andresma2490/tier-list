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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TierListAppRoutingModule {}
