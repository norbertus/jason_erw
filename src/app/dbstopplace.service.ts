// src/app/journey.service.ts

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dbstopplace } from './dbstopplace';

@Injectable({
  providedIn: 'root'
})
export class DbstopplaceService  {

  constructor(private http: HttpClient) { }

  find(stationname: string): Observable<Dbstopplace[]> {
    //const url = 'http://www.angular.at/api/flight';
    const url = 'http://localhost:3000';

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

//    const params = new HttpParams()
//      .set('stationname', stationname);

//    return this.http.get<Dbstopplace[]>(url  + '/mystations/', {headers, params});
    return this.http.get<Dbstopplace[]>(url  + '/mystations' + '?q=' + stationname, {headers});
  }
}
