import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductCardComponent } from './edit-product-card.component';

describe('EditProductCardComponent', () => {
  let component: EditProductCardComponent;
  let fixture: ComponentFixture<EditProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
