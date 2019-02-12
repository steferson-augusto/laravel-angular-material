import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { catchError, map, tap } from 'rxjs/operators';

const API_URL: string = 'http://localhost:8000/api';

export interface Pessoa {
  id?: Number,
  name: String,
  cpf?: String,
  idade: Number,
  created_at?: String,
  updated_at?: String,
}

@Injectable({
  providedIn: 'root'
})

export class PessoaService {

  constructor( private http: HttpClient ) { }

  getPessoas():Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(`${API_URL}/pessoas`);
  }
}
