import { Injectable } from '@angular/core';
import { LocalStorageService } from './localstorage.service';
import { CategoriaModelComponent } from '../models/categoria.models';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  categorias: CategoriaModelComponent[] = []
  constructor(
    private localStorageService:LocalStorageService 
  ) {
    this.categorias = this.localStorageService.get('categorias') || []
  }

  guardarCategoria(categoria: any) {
    this.categorias.push(categoria);
  }

  obtenerCategorias() {
    return this.categorias;
  }
}