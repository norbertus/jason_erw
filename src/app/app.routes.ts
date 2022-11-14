// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { JourneyEditComponent } from './journey-edit/journey-edit.component';
import { JourneySearchComponent } from './journey-search/journey-search.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'journey-search',
        component: JourneySearchComponent
    },
    {
        path: 'passenger-search',
        component: PassengerSearchComponent
    },
    {
        path: 'journey-edit/:id',
        component: JourneyEditComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
