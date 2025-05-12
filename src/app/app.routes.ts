import { Routes } from '@angular/router';
import { CounterComponent } from './pages/couner/counter/counter.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';

export const routes: Routes = [
    {
        path: '',
        component: CounterComponent
    },
    {
        path: 'hero',
        component: HeroPageComponent
    },
    {
        path: 'dragonball',
        component: DragonballPageComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
