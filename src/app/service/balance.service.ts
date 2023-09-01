import { Injectable } from '@angular/core';
import { GastosService } from '../service/gastos.service';
import { IngresosService } from '../service/ingresos.service';

@Injectable({
  providedIn: 'root'
})

export class BalanceService {
  constructor(
    private gastosService: GastosService,
    private ingresosService: IngresosService
  ) {}

  sumarGastoTotal() {
    const gastos = this.gastosService.obtenerGastos();
    return gastos.reduce((total, gasto) => total + gasto.price, 0);
  }

  sumarIngresoTotal() {
    const ingresos = this.ingresosService.obtenerIngresos();
    return ingresos.reduce((total, ingreso) => total + ingreso.price, 0);
  }

  calcularBalance() {
    const ingresos = this.sumarIngresoTotal();
    const gastos = this.sumarGastoTotal();
    return ingresos - gastos;
  }
}
