import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
    template: `
    <h2>HEROES</h2>
    <p>Get your heroes here</p>`
})
export class HeroListComponent { }

@Component({
    template: `
    <h2>CRISIS CENTER</h2>
    <p>Get your crisis here</p>`
})
export class CrisisListComponent { }

@Component({
    selector: 'my-app',
    template: `
    <h1>Component Router</h1>
    <a [routerLink]="['CrisisCenter']">Crisis Center</a>
    <a [routerLink]="['Heroes']">Heroes</a>
    <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/crisis-center', name: 'CrisisCenter', component: CrisisListComponent, useAsDefault: true },
    { path: '/heroes', name: 'Heroes', component: HeroListComponent }
])
export class AppComponent { }

bootstrap(AppComponent, [ROUTER_PROVIDERS]);