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

  // ESTO SE TIENE QUE SELECCIONAR DESDE UN SELECT HTML
  // SelectedMonth: string = ''

  constructor(
    private gastosService: GastosService,
    private categoriaService: CategoriaService,
    private localStorageService: LocalStorageService,
    private balanceMensualService: balanceMensualService
  ) {}

  // obtenerNombreDelMes(fecha: Date): string {
  //   const meses = [
  //     "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  //     "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  //   ];
  //   return meses[fecha.getMonth()];
  // }
  
  guardarGasto() {
    // let mes = this.obtenerNombreDelMes(this.gasto.date)
    // let Contador = 0

    // console.log("esto es el mes en string: " + mes)

    this.gasto.date = new Date(this.gasto.date)
    this.gastosService.guardarGasto(this.gasto);

    const gastosGuardados = this.localStorageService.get('gastos') || [];
    gastosGuardados.push(this.gasto);

    // for (const Gasto of gastosGuardados) { 
    //   if (this.SelectedMonth === mes) {
    //     Contador = Contador + Gasto.price;
    //   }
    // }

    // console.log("EL BALANCE DE " + mes + " ES: " + Contador);
    this.localStorageService.save('gastos', gastosGuardados);
    // this.balanceMensualService.sumarGastoTotalMensual(this.SelectedMonth)
    this.gasto = new GastoModelComponent();
  }

  obtenerGastos() {
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
