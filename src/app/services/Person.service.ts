import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonModel } from '../models/Person.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient) {}

  getPersons(): Observable<PersonModel[]> {
    return this.http.get<PersonModel[]>(`${environment.apiUrl}person`);
  }
}
