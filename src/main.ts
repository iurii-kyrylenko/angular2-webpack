import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide, enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
