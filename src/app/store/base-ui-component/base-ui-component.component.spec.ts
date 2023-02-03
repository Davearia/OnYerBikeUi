import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseUiComponentComponent } from './base-ui-component.component';

describe('BaseUiComponentComponent', () => {
  let component: BaseUiComponentComponent;
  let fixture: ComponentFixture<BaseUiComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseUiComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseUiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
