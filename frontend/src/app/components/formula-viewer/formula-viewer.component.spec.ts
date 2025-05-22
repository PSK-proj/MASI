import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaViewerComponent } from './formula-viewer.component';

describe('FormulaViewerComponent', () => {
  let component: FormulaViewerComponent;
  let fixture: ComponentFixture<FormulaViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
