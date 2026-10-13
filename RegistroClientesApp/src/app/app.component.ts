import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface Inscripcion {
  numero: number;
  nombre: string;
  correo: string;
  especialidad: string;
  turno: string;
  modalidad: string;
  nivel: string;
}

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  titulo = 'Inscripción a Talleres Tecnológicos';

  especialidades: string[] = ['Desarrollo', 'Redes', 'Inteligencia Artificial'];
  turnos: string[] = ['Mañana', 'Noche'];
  modalidades: string[] = ['Presencial', 'Virtual'];
  niveles: string[] = ['Principiante', 'Intermedio', 'Avanzado'];

  // Modelo enlazado con ngModel
  inscripcion = {
    nombre: '',
    correo: '',
    especialidad: '',
    turno: '',
    modalidad: '',
    nivel: '',
  };

  // Los datos viven solo en memoria
  inscripciones: Inscripcion[] = [];

  mensajeExito = '';

  private siguienteNumero = 1;

  get totalInscritos(): number {
    return this.inscripciones.length;
  }

  get totalManana(): number {
    return this.inscripciones.filter((i) => i.turno === 'Mañana').length;
  }

  get totalNoche(): number {
    return this.inscripciones.filter((i) => i.turno === 'Noche').length;
  }

  registrar(form: NgForm): void {
    this.mensajeExito = '';

    if (form.invalid) {
      Object.values(form.controls).forEach((c) => c.markAsTouched());
      return;
    }

    this.inscripciones.push({
      numero: this.siguienteNumero++,
      nombre: this.inscripcion.nombre.trim(),
      correo: this.inscripcion.correo.trim().toLowerCase(),
      especialidad: this.inscripcion.especialidad,
      turno: this.inscripcion.turno,
      modalidad: this.inscripcion.modalidad,
      nivel: this.inscripcion.nivel,
    });

    this.mensajeExito = 'Inscripción registrada correctamente.';
    this.limpiar(form);
  }

  limpiar(form: NgForm): void {
    form.resetForm({
      nombre: '',
      correo: '',
      especialidad: '',
      turno: '',
      modalidad: '',
      nivel: '',
    });
  }

  eliminar(numero: number): void {
    this.inscripciones = this.inscripciones.filter((i) => i.numero !== numero);
  }

  claseEspecialidad(especialidad: string): string {
    switch (especialidad) {
      case 'Desarrollo':
        return 'esp-desarrollo';
      case 'Redes':
        return 'esp-redes';
      default:
        return 'esp-ia';
    }
  }

  trackByNumero(_: number, i: Inscripcion): number {
    return i.numero;
  }
}
