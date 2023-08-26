import { Component } from '@angular/core';
import { GastoModelComponent } from '../models/gasto.models';
import { GastosService } from '../service/gastos.service';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})

export class GastosComponent {
  gasto: GastoModelComponent = new GastoModelComponent();
  filtroCategoria: string = '';

  constructor(
    private gastosService: GastosService,
    private categoriaService: CategoriaService,
  ) {}
  
  guardarGasto() {
    this.gastosService.guardarGasto(this.gasto);
    console.log(this.gasto.name, this.gasto.category);
    this.gasto = new GastoModelComponent();
  }

  obtenerGastos() {
    return this.gastosService.obtenerGastos();
  }

  obtenerCategorias() {
    return this.categoriaService.obtenerCategorias();
  }

  aplicarFiltro() {
    return this.obtenerGastos().filter(gastoFiltrado => !this.filtroCategoria || gastoFiltrado.category === this.filtroCategoria);
  }
}