import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/shared/rest-api.service';
import { Noticia } from 'src/app/shared/noticia';
import { Servico } from 'src/app/shared/servico';
import { BotoesMaisService } from 'src/app/shared/botoes-mais.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  noticias: Noticia[];
  servicosDestaque: Servico[];
  servicosFavoritos: Servico[];

  constructor(private router:Router, private restApi: RestApiService, private botoesMaisService: BotoesMaisService) { }

  ngOnInit() {
    this.restApi.getNoticias().subscribe((data:Noticia[]) => {
      this.noticias = data;
    });
    this.restApi.getServicos().subscribe((data:Servico[]) => {
      this.servicosDestaque = this.servicosFavoritos = data;
    });
  }

  clickBotaoMaisNoticias(){
    this.botoesMaisService.clickBotao('noticias');
  }
  clickBotaoMaisServicos(){
    this.botoesMaisService.clickBotao('servicos');
  }

  clickIrParaNoticia(n:Noticia){
    window.alert('Ir para a notícia específica');
  }

}
