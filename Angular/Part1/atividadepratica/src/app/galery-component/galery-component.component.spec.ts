import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleryComponentComponent } from './galery-component.component';

describe('GaleryComponentComponent', () => {
  let component: GaleryComponentComponent;
  let fixture: ComponentFixture<GaleryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleryComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
