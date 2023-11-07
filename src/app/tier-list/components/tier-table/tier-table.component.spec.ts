import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierTableComponent } from './tier-table.component';

describe('TierTableComponent', () => {
  let component: TierTableComponent;
  let fixture: ComponentFixture<TierTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TierTableComponent],
    });
    fixture = TestBed.createComponent(TierTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
