import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Subject, takeUntil } from 'rxjs';

import { TierListMockService } from '../../services/tier-list-mock.service';
import { TierItem, TierRow } from '../../models/tier-list.model';

@Component({
  selector: 'app-tier-maker',
  templateUrl: './tier-maker.component.html',
  styleUrls: ['./tier-maker.component.scss'],
})
export class TierMakerComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  id = '';
  title = '';
  table: TierRow[] = [];
  showItemFormModal = false;
  tierItem?: TierItem;
  tierRowIndex = 0;
  tierItemIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private tierListService: TierListMockService,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    this.tierListService.tierListData$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.title = data.title;
        this.table = data.table;
        if (this.table.length === 0) {
          this.tierListService.getTierListData(this.id);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  openItemFormModal(
    tierItem?: TierItem,
    rowIndex?: number,
    itemIndex?: number,
  ) {
    this.tierItem = tierItem;
    this.tierRowIndex = rowIndex ?? 0;
    this.tierItemIndex = itemIndex ?? 0;
    this.showItemFormModal = true;
  }

  closeItemFormModal() {
    this.showItemFormModal = false;
  }

  addItem(tierItem: TierItem, rowIndex: number) {
    this.tierListService.addItem(tierItem, rowIndex);
    this.closeItemFormModal();
  }

  editItem(tierItem: TierItem, rowIndex: number, itemIndex: number) {
    this.tierListService.editItem(tierItem, rowIndex, itemIndex);
    this.closeItemFormModal();
  }

  deleteItem(tierItem: TierItem, rowIndex: number, itemIndex: number) {
    const canDelete = confirm(`¿Está seguro de eliminar "${tierItem.name}"?`);
    if (!canDelete) return;
    this.tierListService.deleteItem(tierItem, rowIndex, itemIndex);
  }

  moveRow(event: CdkDragDrop<undefined>) {
    const { previousIndex, currentIndex } = event;
    if (previousIndex === currentIndex) return;
    this.tierListService.moveRow(previousIndex, currentIndex);
  }

  moveItem(event: CdkDragDrop<number>) {
    const { previousContainer, container, previousIndex, currentIndex } = event;
    const sameContainer = previousContainer === container;
    if (sameContainer && previousIndex === currentIndex) return;
    if (sameContainer) {
      this.tierListService.moveItem(
        container.data,
        previousIndex,
        currentIndex,
      );
    } else {
      this.tierListService.transferItem({
        previousRowIndex: previousContainer.data,
        currentRowIndex: container.data,
        previousIndex,
        currentIndex,
      });
    }
  }
}
