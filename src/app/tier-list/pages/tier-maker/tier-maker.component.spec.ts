import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierMakerComponent } from './tier-maker.component';

describe('TierMakerComponent', () => {
  let component: TierMakerComponent;
  let fixture: ComponentFixture<TierMakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TierMakerComponent],
    });
    fixture = TestBed.createComponent(TierMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
