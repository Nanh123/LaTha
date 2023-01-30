import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyTanComponent } from './duy-tan.component';

describe('DuyTanComponent', () => {
  let component: DuyTanComponent;
  let fixture: ComponentFixture<DuyTanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuyTanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuyTanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
