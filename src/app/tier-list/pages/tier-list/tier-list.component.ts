import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, delay, takeUntil } from 'rxjs';
import { TierListMockService } from '../../services/tier-list-mock.service';
import { TierTable } from '../../models/tier-list.model';

@Component({
  selector: 'app-tier-list',
  templateUrl: './tier-list.component.html',
  styleUrls: ['./tier-list.component.scss'],
})
export class TierListComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  id = '';
  title = '';
  table: TierTable = [];

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
}
