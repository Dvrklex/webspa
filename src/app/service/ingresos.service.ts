import { Injectable } from '@angular/core';
import { LocalStorageService } from './localstorage.service';
import { IngresoModelComponent } from '../models/ingreso.models';
@Injectable({
  providedIn: 'root'
})

export class IngresosService {
  ingresos: IngresoModelComponent[] = []

  constructor(
    private localStorageService: LocalStorageService
  ) {
    this.ingresos = this.localStorageService.get('ingresos') || []
  }

  guardarIngreso(ingreso: any) {
    this.ingresos.push(ingreso);
  }

  obtenerIngresos() {
    return this.ingresos;
  }
}