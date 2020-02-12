import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servidor } from './servidor';
import { Noticia } from './noticia';
import { Servico } from './servico';
import { Documento } from './documento';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiUrl = "http://www.mocky.io/v2";
  constructor(private http: HttpClient) { 
    
  }

  public getServidor(id: number): Observable<Servidor>{
    return this.http.get<Servidor>(this.apiUrl+"/5e29c93f300000ce68faf311").pipe();
  }

  public getNoticias(): Observable<Noticia[]>{
    return this.http.get<Noticia[]>(this.apiUrl+"/5e29df0930000077b7faf3c1").pipe();
  }

  public getServicos(): Observable<Servico[]>{
    return this.http.get<Servico[]>(this.apiUrl+"/5e3c29b5300000b4bd214bfc").pipe();
  }

  public getDocumentos(): Observable<Documento[]>{
    return this.http.get<Documento[]>(this.apiUrl+"/5e2f146a3100004d00710554").pipe();
  } 
}
