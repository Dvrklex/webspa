import { Component } from '@angular/core';
import { BalanceService } from '../service/balance.service';
import { BalanceModelComponent } from '../models/balance.models';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})

export class BalanceComponent {
  balanceGeneral: BalanceModelComponent = new BalanceModelComponent

  constructor(
    private balanceService: BalanceService,
  ) {}

  obtenerGastoTotal() {
    return this.balanceGeneral.balanceGastos = this.balanceService.sumarGastoTotal()
  }
}
