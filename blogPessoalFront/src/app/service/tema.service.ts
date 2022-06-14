import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient
  ) { }

  // Variável que recebe o cabeçalho do token e tem o método http,
  // enviando a autorização e token. Se cria para facilitar a programação,
  // agora só escrevemos 'this.token'. Equivale a preencher o header no Postman

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable <Tema[]> {
    return this.http.get<Tema[]>('https://projetoblogpessoalrafael.herokuapp.com', this.token)
  }

  getByIdTema(id: number): Observable <Tema>{
    return this.http.get <Tema>(`https://projetoblogpessoalrafael.herokuapp.com/tema/${id}`, this.token)
  }

  postTema(tema: Tema): Observable <Tema> {
    return this.http.post<Tema>('https://projetoblogpessoalrafael.herokuapp.com/tema', tema, this.token)
  }

  putTema(tema: Tema): Observable <Tema>{
    return this.http.put<Tema>('https://projetoblogpessoalrafael.herokuapp.com/tema', tema, this.token)
  }

  deleteTema(id: number) {
    return this.http.delete(`https://projetoblogpessoalrafael.herokuapp.com/tema/${id}`, this.token)
  }
}
