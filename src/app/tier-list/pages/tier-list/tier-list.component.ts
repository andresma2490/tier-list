import { Component, OnInit } from '@angular/core';
import { TierListMockService } from '../../services/tier-list-mock.service';
import { TierItem, TierTable } from '../../models/tier-list.model';

@Component({
  selector: 'app-tier-list',
  templateUrl: './tier-list.component.html',
  styleUrls: ['./tier-list.component.scss'],
})
export class TierListComponent implements OnInit {
  title: string = '';
  table: TierTable = [];
  items: TierItem[] = [];

  constructor(private tierListService: TierListMockService) {}

  ngOnInit(): void {
    this.tierListService.getData().subscribe((data) => {
      this.title = data.title;
      this.table = data.table;
      this.items = data.items;
    });
  }
}
