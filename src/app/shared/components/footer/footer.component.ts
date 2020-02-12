import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BotoesMaisService } from '../../botoes-mais.service';
import { MatButtonToggleGroup } from '@angular/material';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @ViewChild(MatButtonToggleGroup, {static:false}) group: MatButtonToggleGroup;

  constructor(private router: Router, private botoesMaisService: BotoesMaisService) { 
    this.botoesMaisService.clickBotaoMais.subscribe(e => {
      this.group.value=e;
      this.opcaoMenu();
    });
  }



  ngOnInit() {
  }

  opcaoMenu(){
    if (this.group.value === "home"){
      this.router.navigate(['']);
    }
    if (this.group.value === "documentos"){
      this.router.navigate(['documentos']);
    }
    if (this.group.value === "servicos"){
      this.router.navigate(['servicos']);
    }
    if (this.group.value === "noticias"){
      this.router.navigate(['noticias']);
    }
  }

}
