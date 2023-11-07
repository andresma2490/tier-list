import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TierTableComponent } from './tier-table/tier-table.component';
import { TierItemComponent } from './tier-item/tier-item.component';
import { TierRowComponent } from './tier-row/tier-row.component';

@NgModule({
  declarations: [TierTableComponent, TierRowComponent, TierItemComponent],
  imports: [CommonModule, DragDropModule],
  exports: [TierTableComponent, TierRowComponent, TierItemComponent],
})
export class TierListComponentsModule {}
