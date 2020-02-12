import { Injectable, Output, EventEmitter } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class BotoesMaisService {

  @Output() clickBotaoMais: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  clickBotao(botaoSelecionado: string){
    this.clickBotaoMais.emit(botaoSelecionado);
  }

}
