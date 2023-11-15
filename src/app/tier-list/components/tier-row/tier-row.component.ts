import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tier-row',
  templateUrl: './tier-row.component.html',
  styleUrls: ['./tier-row.component.scss'],
})
export class TierRowComponent {
  @Input() isLast = false;
  @Input() isEditing = false;
  @Output() addItem = new EventEmitter<void>();
}
