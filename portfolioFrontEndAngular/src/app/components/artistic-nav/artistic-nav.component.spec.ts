import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisticNavComponent } from './artistic-nav.component';

describe('ArtisticNavComponent', () => {
  let component: ArtisticNavComponent;
  let fixture: ComponentFixture<ArtisticNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtisticNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisticNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
