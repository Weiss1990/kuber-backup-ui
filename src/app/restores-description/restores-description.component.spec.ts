import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoresDescriptionComponent } from './restores-description.component';

describe('RestoresDescriptionComponent', () => {
  let component: RestoresDescriptionComponent;
  let fixture: ComponentFixture<RestoresDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestoresDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoresDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
