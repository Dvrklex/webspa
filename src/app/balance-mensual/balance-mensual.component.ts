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
  SelectedMonth: string = '';
  selectedBalance: { message: string; value: number } | null = null;
  months: string[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  constructor(
    private localStorageService: LocalStorageService,
    private balanceMensualService: balanceMensualService
  ) {}

  obtenerBalance(balanceType: string) {
    switch (balanceType) {
      case 'balanceMensual':
        this.selectedBalance = { message: 'El balance de este mes es', value: this.balanceMensualService.calcularBalanceMensual(this.SelectedMonth) };
        break;
      case 'balanceGastosMensual':
        this.selectedBalance = { message: 'El gasto de este mes fue', value: this.balanceMensualService.sumarGastoTotalMensual(this.SelectedMonth) };
        break;
      case 'balanceIngresosMensual':
        this.selectedBalance = { message: 'El ingreso de este mes fue', value: this.balanceMensualService.sumarIngresoTotalMensual(this.SelectedMonth) };
        break;
      default:
        this.selectedBalance = null;
        break;
    }
  }
}
