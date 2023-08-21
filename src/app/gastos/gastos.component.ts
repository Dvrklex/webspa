import { Component } from '@angular/core';
import { GastosService } from './gastos.service'; // Asegúrate de tener la ruta correcta
import { GastoModelComponent } from '../models/gasto.models';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})

export class GastosComponent {
  // gasto = {
  //   name: '',
  //   detail: '',
  //   price: 0,
  //   category: '',
  //   date: ''
  // };

  gasto: GastoModelComponent = new GastoModelComponent(); // Usa el modelo

  constructor(private gastosService: GastosService) {}

  guardarGasto() {
    this.gastosService.guardarGasto(this.gasto);
    this.gasto = new GastoModelComponent();

    // this.gasto = {
    //   name: '',
    //   detail: '',
    //   price: 0,
    //   category: '',
    //   date: ''
    // };
  }

  obtenerGastos() {
    return this.gastosService.obtenerGastos();
  }
}