import "reflect-metadata";

require('zone.js/dist/zone'); // import "zone.js";

import 'rxjs/Rx';
import 'rxjs/add/observable/dom/ajax';

import {enableProdMode} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from "@angular/http";
import {ROUTER_PROVIDERS} from "@angular/router-deprecated";

import {AppComponent} from "./app.component";
import {environment} from "./environment";

if (environment.production) {
    enableProdMode();
}

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
])
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));
