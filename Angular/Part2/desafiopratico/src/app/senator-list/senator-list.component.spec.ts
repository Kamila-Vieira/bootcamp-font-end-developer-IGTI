import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenatorListComponent } from './senator-list.component';

describe('SenatorListComponent', () => {
  let component: SenatorListComponent;
  let fixture: ComponentFixture<SenatorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenatorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SenatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
