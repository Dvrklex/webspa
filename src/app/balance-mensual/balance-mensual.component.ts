import { Component } from '@angular/core';
import { LocalStorageService } from '../service/localstorage.service';
import { balanceMensualService } from '../service/balanceMensual.service';
import { BalanceModelComponent } from '../models/balanceMensual.models';

@Component({
  selector: 'app-balance-mensual',
  templateUrl: './balance-mensual.component.html',
  styleUrls: ['./balance-mensual.component.css']
})
export class BalanceMensualComponent {
  balanceMensual: BalanceModelComponent = new BalanceModelComponent();
  SelectedMonth: string = ''

  constructor(
    private localStorageService: LocalStorageService,
    private balanceMensualService: balanceMensualService
  ) {}


  obtenerGastoMensual(){
    this.balanceMensual.balanceGastosMensual = this.balanceMensualService.sumarGastoTotalMensual(this.SelectedMonth)
  }

  obtenerIngresoMensual(){
    this.balanceMensual.balanceIngresosMensual = this.balanceMensualService.sumarIngresoTotalMensual(this.SelectedMonth)
  }

  obtenerBalanceMensual(){
    this.balanceMensual.balanceMensual = this.balanceMensualService.calcularBalanceMensual(this.SelectedMonth)
  }



}
