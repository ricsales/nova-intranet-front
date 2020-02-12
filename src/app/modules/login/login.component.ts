import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /**
   * Parâmetro que indica se o usuário quer se manter conectado
   * e não precisar ficar realizando o login toda a vez que acessa a aplicaçao
   */
  manterConectado: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.authService.getUsuarioAutenticado){
      this.router.navigate(['/']);
    }
  }

  /**
   * Método responsável pelas ações associadas ao login
   */
  logar(){
    console.log("manter conectado: " + this.manterConectado);
    this.authService.login(this.manterConectado);
    this.router.navigate(['']);
  }


}
