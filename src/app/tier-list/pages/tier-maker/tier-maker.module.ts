import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TierMakerRoutingModule } from './tier-maker-routing.module';
import { TierMakerComponent } from './tier-maker.component';
import { TierListComponentsModule } from '../../components/tier-list-components.module';

@NgModule({
  declarations: [TierMakerComponent],
  imports: [CommonModule, TierMakerRoutingModule, TierListComponentsModule],
})
export class TierMakerModule {}
