import { Component } from '@angular/core';
import { IngresoModelComponent } from '../models/ingreso.models';
import { IngresosService } from '../service/ingresos.service';
import { CategoriaService } from '../service/categoria.service';
import { LocalStorageService } from '../service/localstorage.service'; // Importa el servicio LocalStorageService

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})

export class IngresosComponent {
  ingreso: IngresoModelComponent = new IngresoModelComponent();
  filtroCategoria: string = '';
  ingresosGuardados: IngresoModelComponent[] = [];
  verLista: boolean = false; // Variable para controlar si se muestra la lista

  constructor(
    private ingresosService: IngresosService,
    private categoriaService: CategoriaService,
    private localStorageService: LocalStorageService
  ) {
    this.ingresosGuardados = this.localStorageService.get('ingresos') || [];
  }

  guardarIngreso() {
    this.ingresosService.guardarIngreso(this.ingreso);
    console.log(this.ingreso.name, this.ingreso.category);

    this.ingresosGuardados.push(this.ingreso);
    this.localStorageService.save('ingresos', this.ingresosGuardados);

    this.ingreso = new IngresoModelComponent();
  }

  obtenerIngresos() {
    return this.ingresosGuardados;
  }

  obtenerCategorias() {
    return this.categoriaService.obtenerCategorias();
  }

  aplicarFiltro() {
    return this.obtenerIngresos().filter(
      (ingresoFiltrado: IngresoModelComponent) => !this.filtroCategoria || ingresoFiltrado.category === this.filtroCategoria
    );
  }
}
