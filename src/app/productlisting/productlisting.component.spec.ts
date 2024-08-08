import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListingComponent } from './productlisting.component';

describe('ProductlistingComponent', () => {
  let component: ProductListingComponent;
  let fixture: ComponentFixture<ProductListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListingComponent]
    });
    fixture = TestBed.createComponent(ProductListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
