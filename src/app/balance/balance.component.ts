import { Component } from '@angular/core';
import { BalanceService } from '../service/balance.service';
import { BalanceModelComponent } from '../models/balance.models'; // Asegúrate de importar el tipo correcto aquí

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})

export class BalanceComponent {
  balanceGeneral: BalanceModelComponent = new BalanceModelComponent();

  constructor(
    private balanceService: BalanceService,
  ) {}

  obtenerGastoTotal() {
    return this.balanceGeneral.balanceGastos = this.balanceService.sumarGastoTotal();
  }

  obtenerIngresoTotal() {
    return this.balanceGeneral.balanceIngresos = this.balanceService.sumarIngresoTotal();
  }

  obtenerBalanceTotal() {
    return this.balanceGeneral.balanceTotal = this.balanceService.calcularBalance();
  }
}
