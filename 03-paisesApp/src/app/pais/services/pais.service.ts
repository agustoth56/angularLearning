import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  get httpParams(){
    return new HttpParams().set('fields', 'name;flag;demonym;alpha2Code;translations;capital;population');
  }
  
  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`; 
    // return this.http.get(url).pipe(catchError(err => of([])));
    return this.http.get<Country[]>(url, {params:this.httpParams});
    
  }

  buscarCapital(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`; 
    // return this.http.get(url).pipe(catchError(err => of([])));
    return this.http.get<Country[]>(url, {params:this.httpParams});
    
  }

  buscarRegion(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/region/${termino}`; 
    // return this.http.get(url).pipe(catchError(err => of([])));
    return this.http.get<Country[]>(url, {params:this.httpParams});
    
  }
  

  getPaisPorAlpha(id: string): Observable<Country[]>{
    const url = `${this.apiUrl}/alpha/${id}`; 
    // return this.http.get(url).pipe(catchError(err => of([])));
    return this.http.get<Country[]>(url);
    
  }

}
