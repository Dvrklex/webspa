import { Component } from '@angular/core';

@Component({
  selector: 'app-ingreso-model',
  template: ''
})

export class IngresoModelComponent {
  name: string = '';
  detail: string = '';
  price: number = 0;
  category: string = '';
  date: Date = new Date();
}