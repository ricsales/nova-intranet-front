import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './modules/main/main.component';
import { DefaultComponent } from './layouts/default/default.component';
import { NoticiasComponent } from './modules/noticias/noticias.component';
import { ServicosComponent } from './modules/servicos/servicos.component';
import { DocumentosComponent } from './modules/documentos/documentos.component';
import { LoginComponent } from './modules/login/login.component';
import { AuthGuardService } from './shared/guards/auth-guard.service';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: MainComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'noticias',
    component: NoticiasComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'noticias/:idNoticia',
    component: NoticiasComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'servicos',
    component: ServicosComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'documentos',
    component: DocumentosComponent,
    canActivate: [AuthGuardService]
  },
  ]
},

  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
