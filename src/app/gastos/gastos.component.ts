import { Component } from '@angular/core';
import { GastosService } from './gastos.service';
import { GastoModelComponent } from '../models/gasto.models';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})

export class GastosComponent {
  gasto: GastoModelComponent = new GastoModelComponent();

  constructor(private gastosService: GastosService) {}

  guardarGasto() {
    this.gastosService.guardarGasto(this.gasto);
    this.gasto = new GastoModelComponent();
  }

  obtenerGastos() {
    return this.gastosService.obtenerGastos();
  }
}