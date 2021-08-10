import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'sS5euvr60JZTJCm1XdpleE9TJJcKceJV';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] =[];

  public resultados: Gif [] = []; 
  
  get historial(){
    return [...this._historial];
  }

  constructor(private http: HttpClient){

    this._historial = JSON.parse(localStorage.getItem('Historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('Resultados')!) || [];


  }

  buscarGifs(query:string = ''){

    query = query.trim().toLocaleLowerCase();
    
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('Historial', JSON.stringify(this._historial));

    }

    const params = new HttpParams().set('api_key', this.apiKey).set('limit', '12').set('q', query);

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, {params})
      .subscribe((resp) => {
        this.resultados = resp.data;
        localStorage.setItem('Resultados', JSON.stringify(this.resultados));
      })

  }



}
