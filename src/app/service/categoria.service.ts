import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private categorias: any[] = [];

  constructor() {}

  guardarCategoria(categoria: any) {
    this.categorias.push(categoria);
  }

  obtenerCategorias() {
    return this.categorias;
  }
}