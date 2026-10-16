<div align="center">

# 🎓 Sistema de Matrícula e Inscripción a Cursos Online

**Reto Práctico Individual: Desarrollo de Formularios Reactivos**

![Angular](https://img.shields.io/badge/Angular-19-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

Aplicación SPA en Angular para **registrar, validar, listar y anular** matrículas de estudiantes en cursos online, usando **Reactive Forms** y arquitectura basada en **NgModules**.

</div>

---

## 📋 Tabla de contenidos

- [Descripción](#-descripción)
- [Funcionalidades](#-funcionalidades)
- [Campos y validaciones](#-campos-y-validaciones)
- [Tecnologías](#-tecnologías)
- [Requisitos previos](#-requisitos-previos)
- [Instalación y ejecución](#-instalación-y-ejecución)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Demostración sugerida](#-demostración-sugerida)
- [Comandos útiles](#-comandos-útiles)
- [Autor](#-autor)

---

## 📖 Descripción

Este proyecto corresponde a la evaluación sumativa práctica de **Formularios Reactivos** en Angular. El sistema permite capturar los datos de una matrícula, validarlos en tiempo real, mostrarlos en una tabla dinámica y anular inscripciones, todo en memoria mediante un arreglo TypeScript.

> **Restricciones del reto:** sin componentes standalone, sin `HttpClient`, sin backend y sin librerías UI externas.

## ✨ Funcionalidades

- ✅ Formulario reactivo construido con `FormBuilder`, `FormGroup` y `FormControl`.
- ✅ Validaciones estrictas con alertas de error contextuales por campo.
- ✅ Botón de registro deshabilitado con `[disabled]="miFormulario.invalid"`.
- ✅ Reset manual del formulario tras cada registro exitoso.
- ✅ Tabla dinámica de alumnos matriculados con `*ngFor`.
- ✅ Acción para **anular inscripción** de una fila específica.
- ✅ Datos en memoria (arreglo TypeScript), sin persistencia externa.

## 🧾 Campos y validaciones

| Campo | Tipo | Validaciones | Mensaje de error |
|---|---|---|---|
| **Nombre Estudiante** | Texto | Requerido, mínimo 6 caracteres | "Mínimo 6 caracteres" |
| **Nombre del Curso** | Texto | Requerido | "El nombre del curso es obligatorio" |
| **Nivel** | Lista desplegable | Requerido (Básico / Intermedio / Avanzado) | "Debe seleccionar un nivel" |
| **Horas Semanales** | Número | Requerido, mínimo 2, máximo 20 | "Mínimo 2 horas" / "Máximo 20 horas" |

## 🛠️ Tecnologías

| Tecnología | Uso |
|---|---|
| **Angular 19** (NgModules) | Framework de la aplicación |
| **Reactive Forms** | Construcción y validación del formulario |
| **TypeScript** | Lógica de la aplicación |
| **HTML5** | Estructura de la interfaz |
| **CSS3** | Estilos propios, sin librerías externas |
| **Node.js y npm** | Entorno de ejecución y dependencias |
| **Angular CLI** | Ejecución, compilación y pruebas |

## ✅ Requisitos previos

- [Node.js](https://nodejs.org/) 18.19 o superior (recomendado 20+)
- npm (incluido con Node.js)
- [Visual Studio Code](https://code.visualstudio.com/) o cualquier editor de código

## 🚀 Instalación y ejecución

**1. Clonar el repositorio**

```bash
git clone https://github.com/oscarsanchez0712/Registro_Formulario.git
```

**2. Entrar a la carpeta del proyecto**

```bash
cd Registro_Formulario/matricula-cursos
```

**3. Instalar las dependencias**

```bash
npm install
```

**4. Iniciar el servidor de desarrollo**

```bash
npm start
```

**5. Abrir en el navegador**

👉 [http://localhost:4200](http://localhost:4200)

La aplicación se recarga automáticamente al guardar cambios.

## 🗂️ Estructura del proyecto

```text
Registro_Formulario/
├── README.md
└── matricula-cursos/
    ├── .vscode/
    ├── public/
    ├── src/
    │   ├── app/
    │   │   ├── app.component.css
    │   │   ├── app.component.html
    │   │   ├── app.component.spec.ts
    │   │   ├── app.component.ts
    │   │   └── app.module.ts
    │   ├── index.html
    │   ├── main.ts
    │   └── styles.css
    ├── .editorconfig
    ├── .gitignore
    ├── angular.json
    ├── package.json
    ├── package-lock.json
    ├── tsconfig.app.json
    ├── tsconfig.json
    └── tsconfig.spec.json
```

## 🎬 Demostración sugerida

1. **Registrar** una matrícula válida (por ejemplo: *Carlos Ruiz*, *Angular desde cero*, *Básico*, *6 horas*).
2. **Probar validaciones erróneas:** horas `1` y `21`, estudiante con menos de 6 caracteres, nivel sin seleccionar.
3. **Verificar** que el botón permanece deshabilitado mientras el formulario sea inválido.
4. **Revisar** la tabla de alumnos matriculados.
5. **Anular** una inscripción con el botón de la fila.

## 💻 Comandos útiles

| Comando | Descripción |
|---|---|
| `npm install` | Instala las dependencias |
| `npm start` | Inicia el servidor de desarrollo |
| `npm run build` | Compila la aplicación para producción en `dist/` |
| `npm test` | Ejecuta las pruebas unitarias |

## 👤 Autor

**Oscar Heyton Sánchez Arias**
Estudiante de Desarrollo de Software · Instituto Tecnológico Valle Grande
GitHub: [@oscarsanchez0712](https://github.com/oscarsanchez0712)

<sub>Proyecto desarrollado con fines académicos y de aprendizaje.</sub>

---

## 📚 Recursos adicionales

- [Documentación oficial de Angular](https://angular.dev/)
- [Guía de Reactive Forms](https://angular.dev/guide/forms/reactive-forms)
- [Angular CLI](https://angular.dev/tools/cli)
- [Documentación de TypeScript](https://www.typescriptlang.org/docs/)
- [Documentación de Node.js](https://nodejs.org/docs/latest/api/)
