import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxReadableNumberComponent } from './ngx-readable-number.component';

describe('NgxReadableNumberComponent', () => {
  let component: NgxReadableNumberComponent;
  let fixture: ComponentFixture<NgxReadableNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxReadableNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxReadableNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
