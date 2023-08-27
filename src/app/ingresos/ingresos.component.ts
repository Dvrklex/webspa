import { Component } from '@angular/core';
import { IngresoModelComponent } from '../models/ingreso.models';
import { IngresosService } from '../service/ingresos.service';
import { CategoriaComponent } from '../categoria/categoria.component';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent {
  ingreso: IngresoModelComponent = new IngresoModelComponent()
  filtroCategoria: string = '';

  constructor(
    private ingresosService: IngresosService,
    private categoriaService: CategoriaService,
  ) {}
  
  guardarIngreso() {
    this.ingresosService.guardarIngreso(this.ingreso);
    console.log(this.ingreso.name, this.ingreso.category);
    this.ingreso = new IngresoModelComponent();
  }

  obtenerIngresos() {
    return this.ingresosService.obtenerIngresos();
  }

  obtenerCategorias() {
    return this.categoriaService.obtenerCategorias();
  }

  aplicarFiltro() {
    return this.obtenerIngresos().filter(
      ingresoFiltrado => !this.filtroCategoria || ingresoFiltrado.category === this.filtroCategoria
    );
  }
}