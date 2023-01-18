import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryEditorComponent } from './subcategory-editor.component';

describe('SubcategoryEditorComponent', () => {
  let component: SubcategoryEditorComponent;
  let fixture: ComponentFixture<SubcategoryEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcategoryEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategoryEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
