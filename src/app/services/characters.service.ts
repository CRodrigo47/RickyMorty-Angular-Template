import { Character, InterfaceRickyMorty } from './../common/interface-rick-morty';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private http: HttpClient = inject(HttpClient);
  private readonly URL = "https://rickandmortyapi.com/api/character"
  

  constructor() { }

  getCharacters(): Observable<InterfaceRickyMorty>{
    return this.http.get<InterfaceRickyMorty>(this.URL);
  }
  getCharacter(id: number): Observable<Character>{
    return this.http.get<Character>(this.URL + "/" + id);
  }
}
