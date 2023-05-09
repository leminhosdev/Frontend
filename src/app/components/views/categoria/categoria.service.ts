import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from './categoria.model';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: String = enviroment.baseUrl;
  
  constructor(private http: HttpClient, private _snack: MatSnackBar) {  }

  findAll():Observable<Categoria[]>{
    const url = `${this,this.baseUrl}/categoria`
    return this.http.get<Categoria[]>(url)
  }
  
  create(categoria: Categoria): Observable<Categoria>{
    const url = `${this.baseUrl}/categoria`
    return this.http.post<Categoria>(url, categoria);
  }

  mensagem(str: String): void{
    this._snack.open(`${str}`,'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 6000
    })
  }

  findById(id: String): Observable<Categoria>{
    const url = `${this.baseUrl}/categoria/${id}`
    return this.http.get<Categoria>(url)

  }

  delete(id: String): Observable<void>{
    const url = `${this.baseUrl}/categoria/${id}`
    return this.http.delete<void>(url)
  }
}
