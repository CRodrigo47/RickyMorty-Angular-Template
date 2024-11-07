import { Component, inject } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { InterfaceRickyMorty } from '../../common/interface-rick-morty';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-char-list',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './char-list.component.html',
  styleUrl: './char-list.component.css',
})
export class CharListComponent {
  private charService: CharactersService = inject(CharactersService);
  apiData!: InterfaceRickyMorty;

  constructor(){
    this.loadCharacters();
  }

  private loadCharacters(){
    this.charService.getCharacters().subscribe(
      {
        next: value => {
          this.apiData = value;
          return this.apiData;
        },
        error: err => {
          alert(err.message);
        },
        complete: ()=> {
          console.log('Characters loaded!');
          
        }
      }
    )
  }
}
