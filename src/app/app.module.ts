import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { GastosService } from './gastos/gastos.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GastoFormComponent } from './gasto-form/gasto-form.component';
import { GastosComponent } from './gastos/gastos.component';

@NgModule({
  declarations: [
    AppComponent,
    GastoFormComponent,
    GastosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GastosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
