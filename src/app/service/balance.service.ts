import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BalanceService {
  private gastosTotales: any[] = [];
  private GastoTotal: number = 0;
  constructor() {}

  sumarGastoTotal(ListaGastos: any) {
    const listaSumar: any[] = [];
    for (const elemento of ListaGastos) {
     listaSumar.push(elemento.price)
    }
    this.GastoTotal = listaSumar.reduce((a, b) => a + b, 0);
    console.log(listaSumar);
    console.log(this.GastoTotal);
    return(this.GastoTotal);
  }
}
