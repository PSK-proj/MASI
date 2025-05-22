import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaBuilderComponent } from './formula-builder.component';

describe('FormulaBuilderComponent', () => {
  let component: FormulaBuilderComponent;
  let fixture: ComponentFixture<FormulaBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaBuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
