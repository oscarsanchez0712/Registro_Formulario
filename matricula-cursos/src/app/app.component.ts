import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export type Nivel = 'Básico' | 'Intermedio' | 'Avanzado';

export interface Matricula {
  id: number;
  estudiante: string;
  curso: string;
  nivel: Nivel;
  horas: number;
}

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly niveles: Nivel[] = ['Básico', 'Intermedio', 'Avanzado'];

  matriculas: Matricula[] = [];

  miFormulario: FormGroup;

  private siguienteId = 1;

  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      estudiante: ['', [Validators.required, Validators.minLength(6)]],
      curso: ['', [Validators.required]],
      nivel: ['', [Validators.required]],
      horas: [null, [Validators.required, Validators.min(2), Validators.max(20)]],
    });
  }

  /** Devuelve true si el control es inválido y el usuario ya lo tocó. */
  mostrarError(campo: string): boolean {
    const control = this.miFormulario.get(campo);
    return !!control && control.invalid && (control.touched || control.dirty);
  }

  guardar(): void {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    const { estudiante, curso, nivel, horas } = this.miFormulario.value;

    this.matriculas.push({
      id: this.siguienteId++,
      estudiante: String(estudiante).trim(),
      curso: String(curso).trim(),
      nivel: nivel as Nivel,
      horas: Number(horas),
    });

    // Reset manual tras cada registro exitoso
    this.miFormulario.reset({ estudiante: '', curso: '', nivel: '', horas: null });
  }

  anular(id: number): void {
    this.matriculas = this.matriculas.filter((m) => m.id !== id);
  }

  trackById(_index: number, item: Matricula): number {
    return item.id;
  }
}
