import { Component } from '@angular/core';
import { GastosService } from '../service/gastos.service';
import { BalanceService } from '../service/balance.service';
import { BalanceModelComponent } from '../models/balance.models';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})

export class BalanceComponent {
  balanceGeneral: BalanceModelComponent = new BalanceModelComponent
  ListaGastos: any[] = this.gastosService.obtenerGastos();
  GastoTotal: number = 0;

  constructor(
    private gastosService: GastosService,
    private balanceService: BalanceService,
  ) {}

  obtenerGastoTotal() {
    this.GastoTotal = this.balanceService.sumarGastoTotal(this.ListaGastos)
    return this.GastoTotal;

    
    // const listaSumar: any[] = [];
    // for (const elemento of this.ListaGastos) {
    //  listaSumar.push(elemento.price)
    // }
    // this.GastoTotal = listaSumar.reduce((a, b) => a + b, 0);
    // console.log(listaSumar);
    // console.log(this.GastoTotal);
  }
}
