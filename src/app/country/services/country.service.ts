import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  get getParams() {
    return new HttpParams()
    .set( 'fields','name;capital;alpha2Code;flag' )
  }

  searchCountry(term: string): Observable<Country[]>{
    const url = `${ this.apiUrl }/name/${ term }`;
    return this.http.get<Country[]>(url, { params: this.getParams });
  }

  searchCapital(term: string): Observable<Country[]>{
    const url = `${ this.apiUrl }/capital/${ term }`;
    return this.http.get<Country[]>(url, { params: this.getParams });
  }

  getCountryByCode(id: string): Observable<Country>{
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country>(url);
  }
  getCountryByRegion(region: string): Observable<Country[]>{
    const url = `${ this.apiUrl }/region/${ region }`;
    return this.http.get<Country[]>(url, { params: this.getParams });
  }
  
}