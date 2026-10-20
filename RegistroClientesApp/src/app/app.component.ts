import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

export type Turno = 'Mañana' | 'Noche';

export interface Inscripcion {
  numero: number;
  nombre: string;
  codigo: string;
  email: string;
  semestre: number;
  curso: string;
  turno: Turno;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {
  titulo = 'Sistema de Inscripción a Cursos';
  autor = 'Sánchez Arias, Oscar Hoyton';

  /** Código de estudiante: EST- seguido de exactamente 6 dígitos (EST-XXXXXX). */
  readonly patronCodigo = '^EST-[0-9]{6}$';

  /** Email: usuario@dominio.ext con dominio válido y extensión de al menos 2 letras. */
  readonly patronEmail = '^[A-Za-z0-9._%+\\-]+@[A-Za-z0-9\\-]+(\\.[A-Za-z0-9\\-]+)*\\.[A-Za-z]{2,}$';

  /** Semestre: número entero entre 1 y 10. */
  readonly patronSemestre = '^[0-9]+$';
  readonly semestreMin = 1;
  readonly semestreMax = 10;

  readonly cursos: string[] = [
    'Angular Básico',
    'Spring Boot',
    'Bases de Datos con SQL Server',
    'Docker y Contenedores',
    'Python con Flask'
  ];

  readonly turnos: Turno[] = ['Mañana', 'Noche'];

  inscripciones: Inscripcion[] = [];
  private contador = 0;

  mensajeExito = '';
  mensajeError = '';

  modelo = this.nuevoModelo();

  private nuevoModelo() {
    return {
      nombre: '',
      codigo: '',
      email: '',
      semestre: null as number | null,
      curso: '',
      turno: '' as Turno | ''
    };
  }

  get total(): number {
    return this.inscripciones.length;
  }

  get totalManana(): number {
    return this.inscripciones.filter(i => i.turno === 'Mañana').length;
  }

  get totalNoche(): number {
    return this.inscripciones.filter(i => i.turno === 'Noche').length;
  }

  registrar(form: NgForm): void {
    this.mensajeExito = '';
    this.mensajeError = '';

    if (form.invalid) {
      // Marca todos los controles como touched para que se muestren todas las alertas
      form.form.markAllAsTouched();
      this.mensajeError = 'Revisa los campos marcados en rojo antes de registrar la inscripción.';
      return;
    }

    const codigo = this.modelo.codigo.trim();
    const duplicada = this.inscripciones.some(
      i => i.codigo === codigo && i.curso === this.modelo.curso
    );
    if (duplicada) {
      this.mensajeError = `El estudiante ${codigo} ya está inscrito en "${this.modelo.curso}".`;
      return;
    }

    this.contador++;
    this.inscripciones.push({
      numero: this.contador,
      nombre: this.modelo.nombre.trim(),
      codigo,
      email: this.modelo.email.trim().toLowerCase(),
      semestre: Number(this.modelo.semestre),
      curso: this.modelo.curso,
      turno: this.modelo.turno as Turno
    });

    this.mensajeExito = `¡Inscripción #${this.contador} registrada exitosamente!`;
    this.limpiar(form, true);
  }

  eliminar(numero: number): void {
    this.inscripciones = this.inscripciones.filter(i => i.numero !== numero);
    this.mensajeExito = '';
    this.mensajeError = '';
  }

  limpiar(form: NgForm, conservarMensaje = false): void {
    this.modelo = this.nuevoModelo();
    form.resetForm(this.modelo);
    if (!conservarMensaje) {
      this.mensajeExito = '';
      this.mensajeError = '';
    }
  }
}