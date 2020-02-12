import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { SharedModule } from './shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';




registerLocaleData(localeBr, 'pt-BR');




@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    SharedModule,
    NgbModule,
 

    
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  

}
