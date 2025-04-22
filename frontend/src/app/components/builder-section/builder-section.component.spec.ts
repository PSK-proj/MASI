import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderSectionComponent } from './builder-section.component';

describe('BuilderSectionComponent', () => {
  let component: BuilderSectionComponent;
  let fixture: ComponentFixture<BuilderSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuilderSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuilderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
