import { RecargaDirective } from './recarga.directive';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

@Component({
  template: `<ng-container *appRecarga="counter; let index">Hello world</ng-container>`
})
class TestComponent {
  @ViewChild(RecargaDirective) directive!: RecargaDirective;
  counter = 0;
}

describe('RecargaDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecargaDirective, TestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component.directive).toBeTruthy();
  });
});