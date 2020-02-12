import { NgModule } from '@angular/core';
import { DefaultComponent } from './default.component';
import { MainComponent } from 'src/app/modules/main/main.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NoticiasComponent } from 'src/app/modules/noticias/noticias.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatCardModule, MatToolbarModule, MatButtonModule, MatChipsModule, MatIconModule, MatFormFieldModule, MatInputModule, MatListModule, MatExpansionModule, MatTreeModule, MatDialogModule, MatSnackBarModule, MatCheckbox, MatCheckboxModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout';
import { ServicosComponent } from 'src/app/modules/servicos/servicos.component';
import { DocumentosComponent } from 'src/app/modules/documentos/documentos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { AlterarSenhaDialogComponent } from 'src/app/modules/alterar-senha-dialog/alterar-senha-dialog.component';
import { LoginComponent } from 'src/app/modules/login/login.component';




@NgModule({
  declarations: [
    DefaultComponent,
    MainComponent,
    NoticiasComponent,
    ServicosComponent,
    DocumentosComponent,
    AlterarSenhaDialogComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    SharedModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    MatTreeModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    LoadingBarModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCheckboxModule
  ]
})
export class DefaultModule { }
