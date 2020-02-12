import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service';
import { Servico } from 'src/app/shared/servico';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {

  
  servicosAreaMeio: Servico[] = [];
  servicosAreaFim: Servico[] = [];

  servicosAreaMeioFiltro: Servico[];
  servicosAreaFimFiltro: Servico[];

  constructor(private restApi: RestApiService) { }



  ngOnInit() {
  
    this.restApi.getServicos().subscribe((data:Servico[]) => {
      data.forEach(s => {
        if (s.tipo=="meio") this.servicosAreaMeio.push(s);
        else this.servicosAreaFim.push(s);
      })
      this.onSearchChange("");
    });
    

  }

  onSearchChange(searchValue: string): void {  
    this.servicosAreaMeioFiltro = this.servicosAreaMeio.filter(s =>{
     
      return searchValue ? (s.nome.toUpperCase().includes(searchValue.toUpperCase())) : true;
    });
    this.servicosAreaFimFiltro = this.servicosAreaFim.filter(s =>{
     
      return searchValue ? (s.nome.toUpperCase().includes(searchValue.toUpperCase())) : true;
    });
  }


}
