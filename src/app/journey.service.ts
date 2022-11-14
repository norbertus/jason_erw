// src/app/journey.service.ts

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Journey } from './journey';

@Injectable({
  providedIn: 'root'
})
export class JourneyService  {

  constructor(private http: HttpClient) { }

  find(from: string, to: string): Observable<Journey[]> {
    const url = 'http://www.angular.at/api/flight';

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    const params = new HttpParams()
      .set('from', from)
      .set('to', to);

    return this.http.get<Journey[]>(url, {headers, params});
  }
}
