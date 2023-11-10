import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TierListMockService } from '../../services/tier-list-mock.service';
import { TierItem, TierTable } from '../../models/tier-list.model';

@Component({
  selector: 'app-tier-maker',
  templateUrl: './tier-maker.component.html',
  styleUrls: ['./tier-maker.component.scss'],
})
export class TierMakerComponent implements OnInit {
  id = '';
  title = '';
  table: TierTable = [];
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
}
