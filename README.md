# RegistroClientesApp

## Descripción del proyecto

**RegistroClientesApp** es una aplicación web desarrollada con Angular que permite implementar un formulario para el registro de clientes. El proyecto busca ofrecer una interfaz sencilla, organizada y fácil de utilizar, facilitando el ingreso y la gestión de información de los clientes.

La aplicación forma parte de un proyecto de aprendizaje y desarrollo web, utilizando herramientas modernas del ecosistema Angular.

## Tecnologías utilizadas

- **Angular 19.2.27:** framework para el desarrollo de aplicaciones web.
- **TypeScript:** lenguaje utilizado para implementar la lógica de la aplicación.
- **HTML5:** estructura de las páginas.
- **CSS3:** diseño y estilos de la interfaz.
- **Node.js y npm:** entorno de ejecución y administración de dependencias.
- **Angular CLI:** herramienta para crear, ejecutar y compilar el proyecto.

## Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/)
- npm, incluido con Node.js.
- [Angular CLI](https://angular.dev/tools/cli)
- Un editor de código, como Visual Studio Code.

## Instalación

Sigue estos pasos para ejecutar el proyecto en tu computadora.

### 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

Reemplaza `URL_DEL_REPOSITORIO` por la dirección real de tu repositorio de GitHub.

### 2. Ingresar a la carpeta del proyecto

```bash
cd RegistroClientesApp
```

### 3. Instalar las dependencias

```bash
npm install
```

Este comando instala los paquetes necesarios para ejecutar y desarrollar la aplicación.

## Ejecución del proyecto

Para iniciar el servidor de desarrollo, ejecuta:

```bash
ng serve
```

También puedes utilizar:

```bash
npm start
```

Si el comando se ejecuta correctamente, abre tu navegador y visita:

http://localhost:4200/

La aplicación se actualizará automáticamente cuando realices cambios en los archivos del proyecto.

## Estructura del proyecto

La estructura principal de una aplicación Angular suele organizarse de la siguiente manera:

```text
RegistroClientesApp/
├── public/
├── src/
│   ├── app/
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   └── app.config.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

**Nota:** la estructura puede variar según los componentes y archivos que hayas creado en tu proyecto.

## Comandos útiles

| Comando | Descripción |
|---|---|
| `ng serve` | Inicia el servidor de desarrollo. |
| `ng generate component nombre` | Genera un componente nuevo. |
| `ng build` | Compila la aplicación. |
| `ng test` | Ejecuta las pruebas unitarias configuradas. |
| `ng version` | Muestra las versiones de Angular y sus herramientas. |
| `npm install` | Instala las dependencias del proyecto. |

## Compilación para producción

Para generar una versión optimizada de la aplicación, ejecuta:

```bash
ng build
```

Los archivos compilados se guardarán en la carpeta `dist/`, desde donde podrás preparar la aplicación para su publicación.

## Pruebas

Para ejecutar las pruebas unitarias configuradas en el proyecto, utiliza:

```bash
ng test
```

La ejecución de pruebas end-to-end requiere que el proyecto tenga configurado un framework compatible.

## Objetivo del proyecto

El objetivo de RegistroClientesApp es aplicar los conocimientos adquiridos en el desarrollo de aplicaciones web con Angular, organizando el código mediante componentes y utilizando tecnologías que permitan construir interfaces mantenibles y escalables.

## Autor

**Oscar Heyton Sánchez Arias**

Proyecto desarrollado con fines académicos y de aprendizaje en desarrollo de software.

## Recursos adicionales

- [Documentación oficial de Angular](https://angular.dev/)
- [Angular CLI](https://angular.dev/tools/cli)
- [Documentación de TypeScript](https://www.typescriptlang.org/docs/)
- [Documentación de Node.js](https://nodejs.org/docs/)
