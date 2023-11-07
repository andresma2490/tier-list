import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { data } from '../mocks/tier-list.mock';

@Injectable({
  providedIn: 'root',
})
export class TierListMockService {
  constructor() {}

  getData() {
    return of(data).pipe(delay(1000));
  }
}
