# Webspa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.8.
# What is a SPA (Single Page Application)?
A Single Page Application (SPA) is a type of web application that operates within a single web page instead of multiple pages. In a SPA, all content is initially loaded as part of the main page, and user interactions with the application are handled dynamically without the need to completely reload the page. This results in a faster and smoother user experience, akin to that of a desktop application.

# How it SPA works

Initial Load: A SPA loads an initial HTML page containing the basic structure, styles, and scripts.

Navigation: It dynamically displays and hides different content sections on the same page using JavaScript, avoiding full page reloads.

Server Communication: SPAs use APIs to fetch or send data without reloading the entire page, often through AJAX or Fetch requests.

Routing: A router manages URLs and determines which content to show based on the current URL, enabling seamless navigation.

URL Updates: Despite having only one HTML page, the URL in the browser's address bar changes as the user interacts with the application.

Lazy Loading: Additional resources like images, styles, and scripts are loaded lazily as needed to enhance performance.

```mermaid
title Funcionamiento de un SPA

subgraph Cliente
  c1((Carga Inicial)) --> c2((Interfaz))
end

subgraph Servidor
  s1((Envío HTML, JS, CSS)) --> s2((API de Datos))
end

c2 --> a1{Navegación}
a1 --> a2((Carga de Componentes))
a2 --> a3((Actualización de URL))
a3 --> a4((Actualización de Vista))

a2 --> s2
s2 --> a2

c2 --> s1
s1 --> c2

```

# Advantages of SPAs:

Performance: Initial page load and subsequent interactions are faster due to the absence of full page reloads.

User Experience: Provides a desktop-like experience, resulting in smooth and enjoyable navigation.

Routing: Client-side routing allows for quicker navigation and prevents page reloads.

Interactivity: Enables dynamic content updates without interruptions.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
