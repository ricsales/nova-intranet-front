import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarSenhaDialogComponent } from './alterar-senha-dialog.component';

describe('AlterarSenhaDialogComponent', () => {
  let component: AlterarSenhaDialogComponent;
  let fixture: ComponentFixture<AlterarSenhaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarSenhaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarSenhaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
