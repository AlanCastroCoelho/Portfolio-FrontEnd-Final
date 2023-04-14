import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPryectComponent } from './item-pryect.component';

describe('ItemPryectComponent', () => {
  let component: ItemPryectComponent;
  let fixture: ComponentFixture<ItemPryectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPryectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemPryectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
