import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { TierMakerRoutingModule } from './tier-maker-routing.module';
import { TierMakerComponent } from './tier-maker.component';
import { TierListComponentsModule } from '../../components/tier-list-components.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
@NgModule({
  declarations: [TierMakerComponent],
  imports: [
    CommonModule,
    DragDropModule,
    SharedComponentsModule,
    TierMakerRoutingModule,
    TierListComponentsModule,
  ],
})
export class TierMakerModule {}
