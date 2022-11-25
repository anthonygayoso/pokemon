import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Endopints } from '../enums/endpoints.enum';
import { IPokemon } from '../interfaces/pokemon.interface';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

constructor(
  private httpService: HttpService, 
  private httpClient: HttpClient
  ) { }

  getPokemon(name:string) {
    let url = Endopints.GET_POKEMON + name;
    const options = this.httpService.headerOptionsJson(true);
    return this.httpClient.get<any>(url, options);
  }

  savePokemon(request:IPokemon) {
    let url = environment.apiUrl;
    const options = this.httpService.headerOptionsJson(false);
    return this.httpClient.post<any>(url, request, options);
  }

}
