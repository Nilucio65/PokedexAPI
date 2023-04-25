import { PokedexService } from './../pokedex.service';
import { Component, OnInit } from '@angular/core';
import { Poke } from '../poke';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  id:number = 1;
  ids!:string;
  poke: Poke= {} as Poke;

  constructor(private PokedexService : PokedexService ) {}

  ngOnInit(): void {
    this.loadPoke(this.id);
  }

  loadPoke(id:number) {
  this.getImg();
  this.PokedexService.getPoke(id).subscribe({
    next : poke => poke = poke
  });
  }

  proximo(){
    this.id++;
    this.loadPoke(this.id);
  }

  Voltar(){
    this.id--;
    this.loadPoke(this.id);
  }

  getImg(){

    if(this.id <10){
      this.ids = "00" + this.id;
    }
    else if (this.id < 100){
      this.ids = "0" + this.id;
    }
    else{
      this.ids = this.id.toString();
    }
   return this.poke.img = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+ this.ids +".png";

  }


}

