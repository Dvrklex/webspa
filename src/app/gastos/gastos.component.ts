import { Component } from '@angular/core';
import { GastoModelComponent } from '../models/gasto.models';
import { GastosService } from '../service/gastos.service';
import { CategoriaService } from '../service/categoria.service';
import { LocalStorageService } from '../service/localstorage.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})

export class GastosComponent {
  gasto: GastoModelComponent = new GastoModelComponent();
  filtroCategoria: string = '';

  // ESTO SE TIENE QUE SELECCIONAR DESDE UN SELECT HTML
  SelectedMonth: string = 'Sep'


  constructor(
    private gastosService: GastosService,
    private categoriaService: CategoriaService,
    private localStorageService: LocalStorageService,
    private datePipe: DatePipe
  ) {}
  
  guardarGasto() {
    this.gastosService.guardarGasto(this.gasto);
    let Contador = 0

    // LA LOGICA DEL FOR, EL IF Y EL CONTADOR VA EN UN SERVICIO SEPERADO

    // Guarda el gasto en el LocalStorage
    const gastosGuardados = this.localStorageService.get('gastos') || [];
    gastosGuardados.push(this.gasto);
    for (const Gasto of gastosGuardados) {
      Gasto.Month = this.datePipe.transform(Gasto.date, 'MMM d, y')
      Gasto.Month = Gasto.Month.substring(0,3)
      if (this.SelectedMonth === Gasto.Month) {
        Contador = Contador + Gasto.price 
      }
    }

    console.log(Contador);

    this.localStorageService.save('gastos', gastosGuardados);
    this.gasto = new GastoModelComponent();
  }

  obtenerGastos() {
    // Obtener gastos desde el Local Storage
    return this.gastosService.obtenerGastos()
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
