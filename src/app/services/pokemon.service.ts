import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons: any = []

  constructor(private httpClient: HttpClient) {
    this.carregarPokemons()
  }

  async carregarPokemons() {
    const request =
      await firstValueFrom(this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151'))

    this.pokemons = request.results;
    console.log(request);

  }

}
