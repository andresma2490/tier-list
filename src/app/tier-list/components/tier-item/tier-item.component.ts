import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TierItem } from '../../models/tier-list.model';

@Component({
  selector: 'app-tier-item',
  templateUrl: './tier-item.component.html',
  styleUrls: ['./tier-item.component.scss'],
})
export class TierItemComponent {
  @Input() tierItem!: TierItem;
  @Input() isEditing = false;

  @Output() edit = new EventEmitter<TierItem>();
  @Output() delete = new EventEmitter<TierItem>();

  isMenuOpen = false;

  editTierItem() {
    this.edit.emit(this.tierItem);
  }

  deleteTierItem() {
    this.delete.emit(this.tierItem);
  }
}
