# Sistema de Matrícula e Inscripción a Cursos Online

Reto Práctico Individual: Desarrollo de Formularios Reactivos.
Autor: Sánchez Arias, Oscar Heyton.

Aplicación SPA en Angular (NgModules, sin standalone) con Reactive Forms, sin HttpClient, sin backend y sin librerías UI externas. Los datos viven en memoria (arreglo TypeScript).

## Campos del formulario

| Campo | Validación |
|---|---|
| Nombre Estudiante | Requerido, mínimo 6 caracteres |
| Nombre del Curso | Requerido |
| Nivel | Requerido (Básico / Intermedio / Avanzado) |
| Horas Semanales | Requerido, mínimo 2, máximo 20 |

## Requisitos cumplidos

- `FormBuilder` + `FormGroup` / `FormControl` (`miFormulario`).
- Directivas `[formGroup]`, `formControlName` y `(ngSubmit)="guardar()"`.
- Botón con `[disabled]="miFormulario.invalid"` y reset manual tras cada registro exitoso.
- Alertas de error contextuales por campo.
- Tabla dinámica con `*ngFor` y acción para anular (eliminar) una inscripción.

## Ejecutar

```bash
npm install
npm start
```

Abrir http://localhost:4200

## Demostración sugerida

1. Registrar una matrícula válida.
2. Probar horas erróneas (1 y 21) y estudiante de menos de 6 caracteres.
3. Ver los alumnos matriculados en la tabla.
4. Anular una inscripción.
