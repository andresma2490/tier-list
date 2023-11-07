import { Component, Input } from '@angular/core';
import { TierItem } from '../../models/tier-list.model';

@Component({
  selector: 'app-tier-item',
  templateUrl: './tier-item.component.html',
  styleUrls: ['./tier-item.component.scss'],
})
export class TierItemComponent {
  @Input() tierItem!: TierItem;
}
