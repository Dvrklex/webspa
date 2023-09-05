import { Component } from '@angular/core';
import { CategoriaService } from '../service/categoria.service';
import { CategoriaModelComponent } from '../models/categoria.models';
import { LocalStorageService } from '../service/localstorage.service';
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})

export class CategoriaComponent {
  categoria: CategoriaModelComponent = new CategoriaModelComponent();
  categoriasGuardadas: CategoriaModelComponent[] = [];
  constructor(
    private categoriaService: CategoriaService,
    private localStorageService: LocalStorageService
    ) {
      this.categoriasGuardadas = this.localStorageService.get('categorias') || []
    }

  guardarCategoria() {
    this.categoriaService.guardarCategoria(this.categoria);
    const categoriasGuardadas = this.localStorageService.get('categorias') || [];
    categoriasGuardadas.push(this.categoria)
    this.localStorageService.save('categorias', categoriasGuardadas)
    this.categoria = new CategoriaModelComponent();
  }

  obtenerCategorias() {
    return this.categoriaService.obtenerCategorias();
  }
}
