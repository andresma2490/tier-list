import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierItemFormComponent } from './tier-item-form.component';

describe('TierItemFormComponent', () => {
  let component: TierItemFormComponent;
  let fixture: ComponentFixture<TierItemFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TierItemFormComponent]
    });
    fixture = TestBed.createComponent(TierItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
