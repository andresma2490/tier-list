import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { TierListMockService } from '../../services/tier-list-mock.service';
import { TierItem, TierRow } from '../../models/tier-list.model';

@Component({
  selector: 'app-tier-maker',
  templateUrl: './tier-maker.component.html',
  styleUrls: ['./tier-maker.component.scss'],
})
export class TierMakerComponent implements OnInit {
  id = '';
  title = '';
  table: TierRow[] = [];
  items: TierItem[] = [];

  constructor(
    private route: ActivatedRoute,
    private tierListService: TierListMockService,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    this.tierListService.getData(this.id).subscribe((data) => {
      this.title = data.title;
      this.table = data.table;
      this.items = data.items;
    });
  }

  moveItem(event: CdkDragDrop<TierItem[]>) {
    const { previousContainer, container, previousIndex, currentIndex } = event;
    const sameContainer = previousContainer === container;
    if (sameContainer && previousIndex === currentIndex) return;
    if (sameContainer) {
      moveItemInArray(container.data, previousIndex, currentIndex);
    } else {
      transferArrayItem(
        previousContainer.data,
        container.data,
        previousIndex,
        currentIndex,
      );
    }
  }

  moveRow(event: CdkDragDrop<TierRow[]>) {
    const { container, previousIndex, currentIndex } = event;
    if (previousIndex === currentIndex) return;

    moveItemInArray(container.data, previousIndex, currentIndex);
  }
}
