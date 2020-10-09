import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenatorItemComponent } from './senator-item.component';

describe('SenatorItemComponent', () => {
  let component: SenatorItemComponent;
  let fixture: ComponentFixture<SenatorItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenatorItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SenatorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
