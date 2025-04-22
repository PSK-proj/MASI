import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePreviewComponent } from './simple-preview.component';

describe('SimplePreviewComponent', () => {
  let component: SimplePreviewComponent;
  let fixture: ComponentFixture<SimplePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimplePreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
