import { Injectable } from '@angular/core';
import { LocalStorageService } from './localstorage.service';
import { GastoModelComponent } from '../models/gasto.models';
@Injectable({
  providedIn: 'root'
})

export class GastosService {
  gastos: GastoModelComponent[] = [];
  constructor(

    private localStorageService: LocalStorageService
    
    ) {
      this.gastos = this.localStorageService.get('gastos') || []
    }
  guardarGasto(gasto: any) {
    this.gastos.push(gasto);
  }

  obtenerGastos() {
    return this.gastos;
  }
}

