import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddlesectionComponent } from './middlesection.component';

describe('MiddlesectionComponent', () => {
  let component: MiddlesectionComponent;
  let fixture: ComponentFixture<MiddlesectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiddlesectionComponent]
    });
    fixture = TestBed.createComponent(MiddlesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
