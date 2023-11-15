import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TierItem } from '../../models/tier-list.model';

@Component({
  selector: 'app-tier-item-form',
  templateUrl: './tier-item-form.component.html',
  styleUrls: ['./tier-item-form.component.scss'],
})
export class TierItemFormComponent implements OnInit {
  @Input() tierItem?: TierItem;

  @Output() cancel = new EventEmitter<void>();
  @Output() save = new EventEmitter<TierItem>();
  @Output() update = new EventEmitter<TierItem>();

  ngOnInit(): void {
    if (this.tierItem) {
      this.tierItemForm.patchValue(this.tierItem);
    }
  }

  tierItemForm = new FormGroup({
    image: new FormControl('', {
      validators: [
        Validators.required,
        Validators.pattern(/^(ftp|http|https):\/\/[^ "]+$/),
      ],
    }),
    name: new FormControl('', { validators: [Validators.required] }),
    url: new FormControl('', {
      validators: [Validators.pattern(/^(ftp|http|https):\/\/[^ "]+$/)],
    }),
  });

  emitSave() {
    const tierItemValue = this.tierItemForm.value as TierItem;
    if (this.tierItemForm.valid) {
      this.tierItem
        ? this.update.emit(tierItemValue)
        : this.save.emit(tierItemValue);
    }
    this.tierItemForm.markAllAsTouched();
  }
}
