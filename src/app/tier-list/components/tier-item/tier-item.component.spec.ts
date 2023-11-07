import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierItemComponent } from './tier-item.component';

describe('TierItemComponent', () => {
  let component: TierItemComponent;
  let fixture: ComponentFixture<TierItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TierItemComponent],
    });
    fixture = TestBed.createComponent(TierItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
