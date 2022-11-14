// src/app/app.module.ts

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { JourneySearchComponent } from './journey-search/journey-search.component';
import { JourneyCardComponent } from './journey-card/journey-card.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { JourneyEditComponent } from './journey-edit/journey-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
   imports: [
      RouterModule.forRoot(APP_ROUTES),
      HttpClientModule,
      BrowserModule,
      FormsModule,
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      JourneySearchComponent,
      JourneyCardComponent,
      PassengerSearchComponent,
      JourneyEditComponent,
      HomeComponent,
      AboutComponent,
      NotFoundComponent
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
