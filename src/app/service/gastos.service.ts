import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GastosService {
  private gastos: any[] = [];

  constructor() {}

  guardarGasto(gasto: any) {
    this.gastos.push(gasto);
  }

  obtenerGastos() {
    return this.gastos;
  }
}

