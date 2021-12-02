import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SallerListComponent } from './saller-list.component';

describe('SallerListComponent', () => {
  let component: SallerListComponent;
  let fixture: ComponentFixture<SallerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SallerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SallerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
