import { Injectable } from '@angular/core';
import { GastosService } from '../service/gastos.service';

@Injectable({
  providedIn: 'root'
})

export class BalanceService {
  private GastoTotal: number = 0;
  private ListaGastos: any[] = this.gastosService.obtenerGastos();

  constructor(
    private gastosService: GastosService,
  ) {}

  sumarGastoTotal() {
    const listaSumar: any[] = [];
    for (const elemento of this.ListaGastos) {
     listaSumar.push(elemento.price)
    }
    this.GastoTotal = listaSumar.reduce((a, b) => a + b, 0);
    console.log(listaSumar);
    console.log(this.GastoTotal);
    return(this.GastoTotal);
  }
}
