import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Subject, delay, takeUntil } from 'rxjs';
import { TierListMockService } from '../../services/tier-list-mock.service';
import { TierRow } from '../../models/tier-list.model';

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

  constructor(
    private route: ActivatedRoute,
    private tierListService: TierListMockService,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    this.tierListService.tierListData$
      .pipe(takeUntil(this.destroy$), delay(200))
      .subscribe((data) => {
        this.title = data.title;
        this.table = data.table;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
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
