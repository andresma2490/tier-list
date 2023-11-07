import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TierListRoutingModule } from './tier-list-routing.module';
import { TierListComponent } from './tier-list.component';
import { TierListComponentsModule } from '../../components/tier-list-components.module';

@NgModule({
  declarations: [TierListComponent],
  imports: [CommonModule, TierListRoutingModule, TierListComponentsModule],
})
export class TierListModule {}
