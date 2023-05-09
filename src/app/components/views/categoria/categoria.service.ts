import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from './categoria.model';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: String = enviroment.baseUrl;
  
  constructor(private http: HttpClient) {  }

  findAll():Observable<Categoria[]>{
    const url = `${this,this.baseUrl}/categoria`
    return this.http.get<Categoria[]>(url)
  } 
}
