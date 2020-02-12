import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBarModule, MatSnackBar } from '@angular/material';

export interface DialogData {
  senhaAntiga: string;
  novaSenha: string;
}


@Component({
  selector: 'app-alterar-senha-dialog',
  templateUrl: './alterar-senha-dialog.component.html',
  styleUrls: ['./alterar-senha-dialog.component.scss']
})
export class AlterarSenhaDialogComponent implements OnInit {
  ngOnInit(): void {
    
  }
  
  
  constructor(public dialogRef: MatDialogRef<AlterarSenhaDialogComponent>, private snackBar:MatSnackBar){}
  
  clickBotaoCancelar(){
    this.dialogRef.close();
  }

  clickBotaoConfirmar(){
    this.dialogRef.close();
    this.snackBar.open("Senha Alterada com Sucesso",null,{
      duration: 5000,
    })
  }
  
}
