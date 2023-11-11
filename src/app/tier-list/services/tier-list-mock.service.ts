import { Injectable } from '@angular/core';
import { BehaviorSubject, delay } from 'rxjs';
import { TierListData } from '../models/tier-list.model';
import { data } from '../mocks/tier-list.mock';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TierItemTransferData } from '../models/tier-item-transfer.interface';

@Injectable({
  providedIn: 'root',
})
export class TierListMockService {
  private _tierListData = new BehaviorSubject<TierListData>(data);
  tierListData$ = this._tierListData.asObservable();

  constructor() {}

  moveRow(previousIndex: number, currentIndex: number) {
    const tableClone = [...this._tierListData.value.table];
    moveItemInArray(tableClone, previousIndex, currentIndex);
    this._tierListData.next({
      ...this._tierListData.value,
      table: tableClone,
    });
  }

  moveItem(rowIndex: number, previousIndex: number, currentIndex: number) {
    const tableClone = [...this._tierListData.value.table];
    const rowItemsClone = [...tableClone[rowIndex].rowItems];
    moveItemInArray(rowItemsClone, previousIndex, currentIndex);

    tableClone[rowIndex] = {
      ...tableClone[rowIndex],
      rowItems: rowItemsClone,
    };

    this._tierListData.next({
      ...this._tierListData.value,
      table: tableClone,
    });
  }

  transferItem(tierItemTransferData: TierItemTransferData) {
    const { previousRowIndex, currentRowIndex, previousIndex, currentIndex } =
      tierItemTransferData;

    const tableClone = [...this._tierListData.value.table];
    const previousRowClone = [...tableClone[previousRowIndex].rowItems];
    const currentRowClone = [...tableClone[currentRowIndex].rowItems];

    transferArrayItem(
      previousRowClone,
      currentRowClone,
      previousIndex,
      currentIndex,
    );

    tableClone[previousRowIndex] = {
      ...tableClone[previousRowIndex],
      rowItems: previousRowClone,
    };
    tableClone[currentRowIndex] = {
      ...tableClone[currentRowIndex],
      rowItems: currentRowClone,
    };

    this._tierListData.next({
      ...this._tierListData.value,
      table: tableClone,
    });
  }
}
