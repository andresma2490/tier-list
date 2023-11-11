import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tier-row',
  templateUrl: './tier-row.component.html',
  styleUrls: ['./tier-row.component.scss'],
})
export class TierRowComponent {
  @Input() last = false;
}
