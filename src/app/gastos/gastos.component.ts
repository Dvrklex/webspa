import { Component } from '@angular/core';
import { GastoModelComponent } from '../models/gasto.models';
import { GastosService } from '../service/gastos.service';
import { CategoriaService } from '../service/categoria.service';
import { LocalStorageService } from '../service/localstorage.service';

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
    private localStorageService: LocalStorageService 
  ) {}
  
  guardarGasto() {
    this.gastosService.guardarGasto(this.gasto);
    console.log(this.gasto.name, this.gasto.category);

    // Guarda el gasto en el LocalStorage
    const gastosGuardados = this.localStorageService.get('gastos') || [];
    gastosGuardados.push(this.gasto);
    this.localStorageService.save('gastos', gastosGuardados);

    this.gasto = new GastoModelComponent();
  }

  obtenerGastos() {
    // Obtener gastos desde el Local Storage
    const gastosGuardados = this.localStorageService.get('gastos');
    return gastosGuardados || [];
  }
  

  obtenerCategorias() {
    return this.categoriaService.obtenerCategorias();
  }

  aplicarFiltro() {
    return this.obtenerGastos().filter(
      (gastoFiltrado: GastoModelComponent) => !this.filtroCategoria || gastoFiltrado.category === this.filtroCategoria
    );
  }
  
}
