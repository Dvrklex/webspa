import { Component } from '@angular/core';
import { CategoriaService } from '../service/categoria.service';
import { CategoriaModelComponent } from '../models/categoria.models';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})

export class CategoriaComponent {
  categoria: CategoriaModelComponent = new CategoriaModelComponent();

  constructor(private categoriaService: CategoriaService) {}

  guardarCategoria() {
    this.categoriaService.guardarCategoria(this.categoria);
    this.categoria = new CategoriaModelComponent();
  }

  obtenerCategorias() {
    return this.categoriaService.obtenerCategorias();
  }
}
