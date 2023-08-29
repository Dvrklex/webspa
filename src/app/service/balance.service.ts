import { Injectable } from '@angular/core';
import { GastosService } from '../service/gastos.service';
import { IngresosService } from './ingresos.service';

@Injectable({
  providedIn: 'root'
})

export class BalanceService {
  private GastoTotal: number = 0;
  private IngresoTotal: number = 0;
  private BalanceTotal: number = 0;
  private ListaGastos: any[] = this.gastosService.obtenerGastos();
  private ListaIngresos: any[] = this.IngresosService.obtenerIngresos();

  constructor(
    private gastosService: GastosService,
    private IngresosService: IngresosService
  ) {}

  sumarGastoTotal() {
    const listaSumarGastos: any[] = [];
    for (const elemento of this.ListaGastos) {
     listaSumarGastos.push(elemento.price)
    }
    this.GastoTotal = listaSumarGastos.reduce((a, b) => a + b, 0);
    console.log(listaSumarGastos);
    console.log(this.GastoTotal);
    return(this.GastoTotal);
  }

  sumarIngresoTotal() {
    const listaSumarIngresos: any[] = [];
    for (const elemento of this.ListaIngresos) {
     listaSumarIngresos.push(elemento.price)
    }
    this.IngresoTotal = listaSumarIngresos.reduce((a, b) => a + b, 0);
    console.log(listaSumarIngresos);
    console.log(this.IngresoTotal);
    return(this.IngresoTotal);
  }

  calcularBalance(){
    this.BalanceTotal = this.IngresoTotal - this.GastoTotal;
    return(this.BalanceTotal)
  }
}
