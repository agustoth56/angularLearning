import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'sS5euvr60JZTJCm1XdpleE9TJJcKceJV';
  private _historial: string[] =[];

  public resultados: Gif [] = []; 
  
  get historial(){
    return [...this._historial];
  }

  constructor(private http: HttpClient){};

  buscarGifs(query:string = ''){

    query = query.trim().toLocaleLowerCase();
    
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
    }

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=sS5euvr60JZTJCm1XdpleE9TJJcKceJV&q=${query}&limit=10`)
      .subscribe((resp) => {
        console.log(resp.data);
        this.resultados = resp.data;
      })

  }



}
