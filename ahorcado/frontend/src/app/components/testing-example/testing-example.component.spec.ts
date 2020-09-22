import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingExampleComponent } from './testing-example.component';
import { DebugElement } from '@angular/core';

describe('TestingExampleComponent', () => {
  let component: TestingExampleComponent;
  let fixture: ComponentFixture<TestingExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a message with hola', () => {
    expect(component.content).toContain('hola');
  })

  it('should toggle the message boolean', () => {
    expect(component.hideContent).toBeTruthy();
    component.toggle();
    expect(component.hideContent).toBeFalsy();
  })

  it('should have an h5 tag with the word title', () => {
  const bannerDe: DebugElement = fixture.debugElement;
  const bannerEl: HTMLElement = bannerDe.nativeElement;
  const h5 = bannerEl.querySelector('h5');
  expect(h5.textContent).toContain('title');
  })

});
