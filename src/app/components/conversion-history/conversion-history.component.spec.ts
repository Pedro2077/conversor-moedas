import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionHistoryComponent } from './conversion-history.component';

describe('ConversionHistoryComponent', () => {
  let component: ConversionHistoryComponent;
  let fixture: ComponentFixture<ConversionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConversionHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
