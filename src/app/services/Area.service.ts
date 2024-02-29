import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AreaModel } from '../models/Area.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AreaService {
  constructor(private http: HttpClient) {}

  getAreas(): Observable<AreaModel[]> {
    return this.http.get<AreaModel[]>(`${environment.apiUrl}area`);
  }
}
