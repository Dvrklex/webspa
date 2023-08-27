import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class IngresosService {
  private ingresos: any[] = [];

  constructor() {}

  guardarIngreso(ingreso: any) {
    this.ingresos.push(ingreso);
  }

  obtenerIngresos() {
    return this.ingresos;
  }
}