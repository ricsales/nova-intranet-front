import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarUtilService {

  constructor() { }

  public static diferencaEntreDuasDatas(data2: Date, data1: Date){
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    return Math.round(Math.abs((data2.getTime()-data1.getTime()) / oneDay));
  }

}
