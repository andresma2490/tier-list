import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierRowComponent } from './tier-row.component';

describe('TierRowComponent', () => {
  let component: TierRowComponent;
  let fixture: ComponentFixture<TierRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TierRowComponent],
    });
    fixture = TestBed.createComponent(TierRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
