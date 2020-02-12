import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';


@Injectable()
export class AuthService {

  //atributo que indica se o usuário está autenticado no momento
  private usuarioAutenticado: boolean = false;
  


  constructor(public router: Router) {}

  /**
   * Método que realiza a operação de login a partir da tela
   * @param manterLogado 
   */
  login(manterLogado: boolean){
    this.usuarioAutenticado = true;
    //se o usuário desejou manter logado, seta isso no localStorage storage
    localStorage.setItem('manterLogado', manterLogado.toString());
    
  }

  /**
   * Verifica se tem usuário autenticado no localStorage
   */
  getUsuarioAutenticado(){
    if (this.obterManterLogadoLocalStorage()){
      this.usuarioAutenticado = true;
    }
    return this.usuarioAutenticado;
  }

  /**Faz as operações para sair do sistema */
  logout(){
    this.usuarioAutenticado = false;

    //tira também do local Storage
    localStorage.removeItem('manterLogado');
    
    this.router.navigate(['/']);
  }

  private obterManterLogadoLocalStorage(){
    return JSON.parse(localStorage.getItem('manterLogado') || 'false');
  }
}
