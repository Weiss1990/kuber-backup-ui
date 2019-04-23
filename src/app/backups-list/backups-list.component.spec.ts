import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupsListComponent } from './backups-list.component';

describe('BackupsListComponent', () => {
  let component: BackupsListComponent;
  let fixture: ComponentFixture<BackupsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackupsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
