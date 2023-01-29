import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreNavHeaderComponent } from './store-nav-header.component';

describe('StoreNavHeaderComponent', () => {
  let component: StoreNavHeaderComponent;
  let fixture: ComponentFixture<StoreNavHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreNavHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreNavHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
