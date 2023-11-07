import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TierListComponent } from './tier-list.component';

const routes: Routes = [{ path: '', component: TierListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TierListRoutingModule {}
