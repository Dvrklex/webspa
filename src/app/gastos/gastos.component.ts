import { Component } from '@angular/core';
import { GastosService } from '../service/gastos.service';
import { GastoModelComponent } from '../models/gasto.models';
import { CategoriaService } from '../service/categoria.service';
import { CategoriaModelComponent } from '../models/categoria.models';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})

export class GastosComponent {
  gasto: GastoModelComponent = new GastoModelComponent();

  constructor(
    private gastosService: GastosService,
    private categoriaService: CategoriaService
  ) {}

  guardarGasto() {
    this.gastosService.guardarGasto(this.gasto);
    this.gasto = new GastoModelComponent();
  }

  obtenerGastos() {
    return this.gastosService.obtenerGastos();
  }

  obtenerCategorias() {
    return this.categoriaService.obtenerCategorias();
  }

}