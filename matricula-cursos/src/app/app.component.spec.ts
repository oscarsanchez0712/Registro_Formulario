import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('debe crear el componente', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('el formulario inicia inválido', () => {
    const app = TestBed.createComponent(AppComponent).componentInstance;
    expect(app.miFormulario.invalid).toBeTrue();
  });

  it('rechaza horas fuera del rango 2-20', () => {
    const app = TestBed.createComponent(AppComponent).componentInstance;
    app.miFormulario.get('horas')?.setValue(1);
    expect(app.miFormulario.get('horas')?.hasError('min')).toBeTrue();
    app.miFormulario.get('horas')?.setValue(21);
    expect(app.miFormulario.get('horas')?.hasError('max')).toBeTrue();
  });

  it('registra y anula una matrícula', () => {
    const app = TestBed.createComponent(AppComponent).componentInstance;
    app.miFormulario.setValue({
      estudiante: 'Carlos Ruiz',
      curso: 'Angular',
      nivel: 'Básico',
      horas: 5,
    });
    app.guardar();
    expect(app.matriculas.length).toBe(1);
    expect(app.miFormulario.pristine).toBeTrue();
    app.anular(app.matriculas[0].id);
    expect(app.matriculas.length).toBe(0);
  });
});
