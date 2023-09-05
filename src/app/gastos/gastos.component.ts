import { Component } from '@angular/core';
import { GastoModelComponent } from '../models/gasto.models';
import { GastosService } from '../service/gastos.service';
import { CategoriaService } from '../service/categoria.service';
import { LocalStorageService } from '../service/localstorage.service';
import { balanceMensualService } from '../service/balanceMensual.service';


@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})

export class GastosComponent {
  gasto: GastoModelComponent = new GastoModelComponent();
  filtroCategoria: string = '';
  gastosGuardados: GastoModelComponent[] = [];

  constructor(
    private gastosService: GastosService,
    private categoriaService: CategoriaService,
    private localStorageService: LocalStorageService,
    private balanceMensualService: balanceMensualService
  ) { this.gastosGuardados = this.localStorageService.get('gastos')}

  guardarGasto() {
    this.gasto.date = new Date(this.gasto.date)
    this.gastosService.guardarGasto(this.gasto);
    const gastosGuardados = this.localStorageService.get('gastos') || [];
    gastosGuardados.push(this.gasto);
    this.localStorageService.save('gastos', gastosGuardados);
    this.gasto = new GastoModelComponent();
  }

  obtenerGastos() {
    return this.gastosService.obtenerGastos();
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
