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
  filtroCategoria: string = ''; // Agrega esta propiedad

  constructor(
    private gastosService: GastosService,
    private categoriaService: CategoriaService
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
    return this.obtenerGastos().filter(gasto => !this.filtroCategoria || gasto.category === this.filtroCategoria);
  }
  

  // aplicarFiltro() {
  //   const filtro = this.filtroCategoria;
  //   const gastos = this.obtenerGastos();
  //   const listaFiltrados = [];


  
  //   if (!filtro) {
  //     return gastos; // Sin filtro seleccionado, mostrar todos los gastos
  //   }

  //   const gastosFiltrados = gastos.filter(gasto => gasto.category === filtro);
  //   return gastosFiltrados;
  // }
}