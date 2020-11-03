import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorcaComponent } from './horca.component';

describe('HorcaComponent', () => {
  let component: HorcaComponent;
  let fixture: ComponentFixture<HorcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
