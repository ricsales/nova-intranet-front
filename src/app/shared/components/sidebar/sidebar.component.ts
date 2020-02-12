import { Component, OnInit } from '@angular/core';
import { Servidor } from '../../servidor';
import { RestApiService } from '../../rest-api.service';
import { CalendarUtilService } from '../../utils/calendar-util.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AlterarSenhaDialogComponent } from 'src/app/modules/alterar-senha-dialog/alterar-senha-dialog.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
 
  servidor: Servidor;

  constructor(private api: RestApiService, public dialog: MatDialog, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.api.getServidor(1).subscribe((data: Servidor) => {
      this.servidor = data;   
      
    });
  }

 

  getColorFerias(f){
    
    switch(f.tipo){
      case "Férias" :
        return "primary";
      case "Licença":
          return "warn";
    }
  }

  pegarDiferencaEntreDuasDatas(f){
    
    return CalendarUtilService.diferencaEntreDuasDatas(new Date(f.fim),new Date(f.inicio));
  }

  abrirDialogAlterarSenha(){
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        //dialogConfig.width = '250px';
        
        this.dialog.open(AlterarSenhaDialogComponent, dialogConfig);
  }

  sair(){
    this.authService.logout();
    this.router.navigate(['']);
  }

}

