import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { GastosService } from './service/gastos.service';
import { LocalStorageService } from './service/localstorage.service'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GastosComponent } from './gastos/gastos.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { BalanceComponent } from './balance/balance.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { DatePipe } from '@angular/common';
import { balanceMensualService } from './service/balanceMensual.service';
import { BalanceMensualComponent } from './balance-mensual/balance-mensual.component';

@NgModule({
  declarations: [
    AppComponent,
    GastosComponent,
    CategoriaComponent,
    BalanceComponent,
    IngresosComponent,
    BalanceMensualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DatePipe
  ],
  providers: [
    GastosService,
    LocalStorageService,
    DatePipe,
    balanceMensualService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
