import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupDescriptionComponent } from './backup-description.component';

describe('BackupDescriptionComponent', () => {
  let component: BackupDescriptionComponent;
  let fixture: ComponentFixture<BackupDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackupDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
