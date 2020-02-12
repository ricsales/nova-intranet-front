import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatCardModule, MatExpansionModule, MatChipsModule, MatButtonToggleModule, MatDialogModule, MatFormField, MatFormFieldModule  } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { RestApiService } from './rest-api.service';
import { CalendarUtilService } from './utils/calendar-util.service';
import { SafePipe } from './pipes/safe.pipe';
import { BotoesMaisService } from './botoes-mais.service';
import { AlterarSenhaDialogComponent } from '../modules/alterar-senha-dialog/alterar-senha-dialog.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    SafePipe
  ],
  entryComponents:[
    AlterarSenhaDialogComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatCardModule,
    MatExpansionModule,
    MatChipsModule,
    MatButtonModule,
    MatButtonToggleModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    SafePipe
  ],
  providers:[
    RestApiService,
    CalendarUtilService,
    BotoesMaisService,
    AuthGuardService,
    AuthService,
    AuthGuardService
  ]
})
export class SharedModule { }
