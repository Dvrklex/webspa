import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  private gastosTotales: any[] = [];
  private ingresosTotales: any[] = [];

  constructor() {}

  guardarGastoTotal(gasto: any) {
    this.gastosTotales.push(gasto);
  }

  obtenerGastosTotal() {
    return this.gastosTotales;
  }
}
