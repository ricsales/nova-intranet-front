import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from 'src/app/shared/noticia';
import { RestApiService } from 'src/app/shared/rest-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  screenWidth: number;
  noticias: Noticia[];

  idNoticia: number;
  noticiaEspecifica: Noticia;
  
  constructor(private restApi: RestApiService,private activatedRoute: ActivatedRoute) { 
    
    this.activatedRoute.paramMap.subscribe(params =>{
      console.log(params);
      this.idNoticia = Number.parseInt(params.get('idNoticia'));
    });
    // set screenWidth on page load
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
    // set screenWidth on screen size change
      this.screenWidth = window.innerWidth;
    };
  }

  ngOnInit() {
    
    if(this.idNoticia){
      this.restApi.getNoticias().subscribe((data:Noticia[]) => {
        this.noticiaEspecifica = data[0];
      });
    }
    else {
      this.restApi.getNoticias().subscribe((data:Noticia[]) => {
        this.noticias = data;
      });
    }
  }

  sentidoLinha(){
    if (this.screenWidth > 500) return "rtl";
    else return "ltr";
  }
}
