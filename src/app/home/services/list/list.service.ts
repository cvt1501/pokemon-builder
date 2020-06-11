import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IpokemonList, Ipokemon } from '../../shared';

@Injectable({
  	providedIn: 'root'
})

/**
 * @author Kevin Cavenatti <kevin_cavenatti@hotmail.com>
 * @version 1.0.0
 */

export class ListService {
    private static readonly API_URL: string = 'https://pokeapi.co/api/v2/pokemon';
	private static readonly INITIAL_PARAM: string = '?limit=897&offset=0';
	
    constructor(private http: HttpClient) {}

    public getPokeList(): Observable<IpokemonList> {
		const { API_URL, INITIAL_PARAM } = ListService

		return this.http.get<IpokemonList>(API_URL + INITIAL_PARAM);
    };

    public getPokeProperties(url: string): Observable<Ipokemon> {
		return this.http.get<Ipokemon>(url);
	};
	
	public filterPoke(pokeList: Ipokemon[], value: string): Ipokemon[] {
		return pokeList.filter(cur => cur.name.toLowerCase().indexOf(value.toLowerCase()) !== -1);
	};

    public changeList(pokeList: Ipokemon[], pokeTeam: Ipokemon []): Ipokemon[] {
		return pokeList.filter((pokemonOfList: Ipokemon) => {
			return !pokeTeam.some((pokemonOfTeam) => pokemonOfList.id === pokemonOfTeam.id);
		});
    };
}
