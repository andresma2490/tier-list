import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TierItem, TierListData } from '../models/tier-list.model';
import { data } from '../mocks/tier-list.mock';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TierItemTransferData } from '../models/tier-item-transfer.interface';

@Injectable({
  providedIn: 'root',
})
export class TierListMockService {
  private _tierListData = new BehaviorSubject<TierListData>({
    title: '',
    table: [],
  });
  tierListData$ = this._tierListData.asObservable();

  constructor() {}

  private updateTierListData(changes: Partial<TierListData>) {
    this._tierListData.next({ ...this._tierListData.value, ...changes });
  }

  getTierListData(id: string) {
    const tierListData = data.find((tierList) => tierList._id === id);
    this.updateTierListData({ ...tierListData });
  }

  addItem(tierItem: TierItem, rowIndex: number) {
    const tableClone = [...this._tierListData.value.table];
    const rowItemsClone = [...tableClone[rowIndex].rowItems, tierItem];
    tableClone[rowIndex] = { ...tableClone[rowIndex], rowItems: rowItemsClone };
    this.updateTierListData({ table: tableClone });
  }

  editItem(tierItem: TierItem, rowIndex: number, itemIndex: number) {
    const tableClone = [...this._tierListData.value.table];
    const rowItemsClone = [...tableClone[rowIndex].rowItems];
    rowItemsClone[itemIndex] = tierItem;
    tableClone[rowIndex] = { ...tableClone[rowIndex], rowItems: rowItemsClone };
    this.updateTierListData({ table: tableClone });
  }

  deleteItem(tierItem: TierItem, rowIndex: number, itemIndex: number) {
    const tableClone = [...this._tierListData.value.table];
    const rowItemsClone = [
      ...tableClone[rowIndex].rowItems.slice(0, itemIndex),
      ...tableClone[rowIndex].rowItems.slice(itemIndex + 1),
    ];
    tableClone[rowIndex] = { ...tableClone[rowIndex], rowItems: rowItemsClone };
    this.updateTierListData({ table: tableClone });
  }

  moveRow(previousIndex: number, currentIndex: number) {
    const tableClone = [...this._tierListData.value.table];
    moveItemInArray(tableClone, previousIndex, currentIndex);
    this.updateTierListData({ table: tableClone });
  }

  moveItem(rowIndex: number, previousIndex: number, currentIndex: number) {
    const tableClone = [...this._tierListData.value.table];
    const rowItemsClone = [...tableClone[rowIndex].rowItems];
    moveItemInArray(rowItemsClone, previousIndex, currentIndex);

    tableClone[rowIndex] = { ...tableClone[rowIndex], rowItems: rowItemsClone };
    this.updateTierListData({ table: tableClone });
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

    this.updateTierListData({ table: tableClone });
  }
}
