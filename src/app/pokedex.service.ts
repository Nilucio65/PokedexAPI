import { Poke } from './poke';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

    constructor(private http: HttpClient) { }

    getPoke(id: number): Observable<Poke>{
      return this.http.get<Poke>(`https://pokeapi.co/api/v2/pokemon/${id}`);

    }
}
