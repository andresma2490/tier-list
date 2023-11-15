import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { TierTableComponent } from './tier-table/tier-table.component';
import { TierItemComponent } from './tier-item/tier-item.component';
import { TierRowComponent } from './tier-row/tier-row.component';
import { TierItemFormComponent } from './tier-item-form/tier-item-form.component';

@NgModule({
  declarations: [
    TierTableComponent,
    TierRowComponent,
    TierItemComponent,
    TierItemFormComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, DragDropModule, OverlayModule],
  exports: [
    TierTableComponent,
    TierRowComponent,
    TierItemComponent,
    TierItemFormComponent,
  ],
})
export class TierListComponentsModule {}
