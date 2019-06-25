import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalLibComponent } from './normal-lib.component';

describe('NormalLibComponent', () => {
  let component: NormalLibComponent;
  let fixture: ComponentFixture<NormalLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
