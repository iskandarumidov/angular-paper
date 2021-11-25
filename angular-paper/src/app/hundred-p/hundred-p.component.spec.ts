import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HundredPComponent } from './hundred-p.component';

describe('HundredPComponent', () => {
  let component: HundredPComponent;
  let fixture: ComponentFixture<HundredPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HundredPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HundredPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
