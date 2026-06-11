import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

import { DialogProjectsComponent } from './dialog-projects.component';

describe('DialogProjectsComponent', () => {
  let component: DialogProjectsComponent;
  let fixture: ComponentFixture<DialogProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogProjectsComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {
            close: jasmine.createSpy('close'),
          },
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            title: 'Projeto',
            description: '<p>Descrição</p>',
            links: [],
          },
        },
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
