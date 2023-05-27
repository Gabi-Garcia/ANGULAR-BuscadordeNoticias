import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http : HttpClient) { }

  getNoticias(parametros:any):Observable<any>{
    const URL ='https://newsapi.org/v2/top-headlines?country='+ parametros.pais +'&category='+ parametros.categoria +'&apiKey=3f659a515951486a8ab00c6022a1bda4'

 return this.http.get(URL)
  }
}
