import { Component, OnInit, Input } from '@angular/core';
import { MatDrawer } from '@angular/material'
import { RestApiService } from '../../rest-api.service';
import { Servidor } from '../../servidor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private api:RestApiService) { }

  enderecoImagemAvatar:string;

  @Input()
  drawer: MatDrawer;

  ngOnInit() {
    this.api.getServidor(1).subscribe((data: Servidor) => {
      this.enderecoImagemAvatar = data.imagem;
    });
  }

  toggleSideNav(){
    this.drawer.toggle();
  }

}
