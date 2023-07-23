import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPrjectComponent } from './item-prject.component';

describe('ItemPrjectComponent', () => {
  let component: ItemPrjectComponent;
  let fixture: ComponentFixture<ItemPrjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPrjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemPrjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
