# TorreDiMezzoWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Project structure
Di seguito la macro-struttura del progetto.

### Cartella src
La cartella src contiene tutto cio' inerente alla parte del codice dell'applicazione.
Le componenti principali sono:
 - app: [Sezione app](README.md#app)
 - assets: contiene tutti i file statici che l'app dovra' caricare (immagini, media ecc).
 - environments: contiene la lista dei file per la configurazione dei vari ambienti (es. dev, prod ecc.). NB. per ogni ambiente che si aggiunge, non basta solo aggiungerne il file environment, ma bisogna aggiungerlo anche nel file `angular.json`.
 - scss: contiene tutti i file relativi allo stile dell'applicazione.
 - index.html: il file html principale, da cui viene eseguita l'intera app.

### Cartella app
La cartella app contiene il vero e proprio codice Angular, ovvero moduli, componenti ecc.
Di seguito la struttura della cartella:
 - app: contiene il modulo, il component ed il file di routing principali.
 - views: contiene le varie views che, spesso, coincidono con i vari moduli dell'app.
 - components: contiene i componenti angular che non appartengono a nessun modulo in particolare (es. pagina 404, pagina 500 ecc).
 - shared: contiene tutto cio' che serve a livello globale all'interno dell'app, ovvero che puo' servire in diversi moduli dell'app.

Si consiglia di creare, nella cartella shared, un modulo globale, contenente pipes/directives/components utilizzati da piu' moduli.