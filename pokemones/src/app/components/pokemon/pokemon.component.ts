import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { timer } from 'rxjs';
import Swal from 'sweetalert2';
import { IPokemon } from 'src/app/interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})

export class PokemonComponent implements OnInit {
  pokemonForm: FormGroup;
  loadData: boolean;
  dataSource: Array<any> = [];

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.formBuilder();
  }

  /**
   * Funcion para crear el formBuilder de busqueda
   */
  formBuilder() {
    this.pokemonForm = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  }

  /**
   * Funcion para buscar un pokemon segun el valor ingresado
   */
  searchPokemon() {
    this.loadData = true;
    timer(2000).subscribe(
      () => {
        this.getPokemon()
      }
    );
  }

  /**
   * Funcion para llamar el servicio de busqueda
   */
  getPokemon() {
    let name = this.pokemonForm.value.name;
    this.dataSource = [];
    this.pokemonService.getPokemon(name).subscribe(
      (response) => {
        this.loadData = false;
        this.loadData = false;
        let dataTemp: Array<any> = [];
        dataTemp.push(response);
        dataTemp = dataTemp.map((element) => {
          return {
            id: element.id,
            name: element.name,
            weight: element.weight,
            height: element.height,
            sprites: element.sprites,
            stats: element.stats,
            base_experience: element.base_experience,
            abilities: element.abilities
          }
        });
        this.dataSource = dataTemp;
        this.savePokemon(this.dataSource[0]);
      },
      (error) => {
        this.loadData = false;
        Swal.fire(
          'El pokemon consultado no se encuentra en la base de datos.',
          'info'
        );
      }
    );
  }

  /**
   * Servicio para guardar el pokemon consultado en la base de datos
   * @param pokemon 
   */
  savePokemon(pokemon: IPokemon){
    this.pokemonService.savePokemon(pokemon).subscribe(
      (response)=>{
        console.log(response)
      }
    );
  }

}
