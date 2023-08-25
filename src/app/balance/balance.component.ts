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
  dataList: any[] = [];

  constructor(
    private gastosService: GastosService,
    private balanceService: BalanceService
  ) {}

  obtenerGastosTotales() {
    return this.dataList = this.gastosService.obtenerGastos(); 
  }
}
