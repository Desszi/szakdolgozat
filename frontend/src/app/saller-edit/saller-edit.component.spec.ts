import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SallerEditComponent } from './saller-edit.component';

describe('SallerEditComponent', () => {
  let component: SallerEditComponent;
  let fixture: ComponentFixture<SallerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SallerEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SallerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
