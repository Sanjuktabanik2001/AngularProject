import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoproductsComponent } from './demoproducts.component';

describe('DemoproductsComponent', () => {
  let component: DemoproductsComponent;
  let fixture: ComponentFixture<DemoproductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoproductsComponent]
    });
    fixture = TestBed.createComponent(DemoproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
