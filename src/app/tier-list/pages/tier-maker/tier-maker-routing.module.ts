import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TierMakerComponent } from './tier-maker.component';

const routes: Routes = [{ path: '', component: TierMakerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TierMakerRoutingModule {}
