import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  tituloProyecto = 'BinSorter A.M.G.';
  descripcionProyecto = 'Sistema inteligente y gamificado para la clasificación de residuos en Instituciones de Educación Superior.';
  
  // Variables para el clasificador y gamificación
  residuoSeleccionado: string = '';
  destinoSugerido: string = '';
  puntosGanados: number = 0;
  puntajeTotal: number = 0;

  explorar() {
    alert('¡Bienvenido! Explora el clasificador más abajo.');
  }

  clasificar(residuo: string, destino: string, puntos: number) {
    this.residuoSeleccionado = residuo;
    this.destinoSugerido = destino;
    this.puntosGanados = puntos;
    this.puntajeTotal += puntos; // Suma puntos al total del usuario

    this.puntajeTotal = Number(this.puntajeTotal) +Number(puntos);
  }

  obtenerRango(): string {
    if (this.puntajeTotal < 150) return '🌱 Novato Verde';
    if (this.puntajeTotal < 350) return '♻️ Reciclador PRO';
    return '🏆 Guardián del Campus';
  }
}
