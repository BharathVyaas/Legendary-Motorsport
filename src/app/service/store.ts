// store.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Store {
  constructor(private http: HttpClient) {}

  getList(): Observable<any> {
    return this.http.get('assets/data/car-list.json');
  }
}