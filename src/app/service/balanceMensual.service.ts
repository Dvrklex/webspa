import { Injectable } from '@angular/core';
import { GastosService } from '../service/gastos.service';
import { IngresosService } from '../service/ingresos.service';
import { LocalStorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})

export class balanceMensualService {
  constructor(
    private gastosService: GastosService,
    private ingresosService: IngresosService,
    private localStorageService: LocalStorageService
  ) {}
 
  obtenerNombreDelMes(fecha: Date): string {
    const meses = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    return meses[fecha.getMonth()];
  }

  sumarGastoTotalMensual(mesSeleccionado: string) {
    let Contador = 0
    let mes = ""
    const gastos = this.localStorageService.get('gastos') || [];
    for (const gasto of gastos) {
        gasto.date = new Date(gasto.date)
        mes = this.obtenerNombreDelMes(gasto.date)
        if (mes === mesSeleccionado) {
            Contador += gasto.price;
        }
    }
    return (Contador)
  }

  sumarIngresoTotalMensual(mesSeleccionado: string) {
    let Contador = 0
    let mes = ""
    const ingresos = this.localStorageService.get('ingresos') || [];
    for (const gasto of ingresos) {
        gasto.date = new Date(gasto.date)
        mes = this.obtenerNombreDelMes(gasto.date)
        if (mes === mesSeleccionado) {
            Contador += gasto.price;
        }
    }
    return (Contador)
  }

  calcularBalanceMensual(mesSeleccionado: string) {
    const ingresos = this.sumarIngresoTotalMensual(mesSeleccionado);
    const gastos = this.sumarGastoTotalMensual(mesSeleccionado)
    return ingresos - gastos;
  }
}