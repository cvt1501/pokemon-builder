import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { Ipokemon, IType, demageType } from '../../shared';

@Injectable({
	providedIn: 'root'
})

/**
 * @author Kevin Cavenatti <kevin_cavenatti@hotmail.com>
 * @version 1.0.0
 */

export class TeamService {
	private pokeTeam = new BehaviorSubject<Ipokemon[]>([]);

	constructor(private http: HttpClient) {}

	public getPokeTeam(): Observable<Ipokemon[]> {
		return this.pokeTeam;
	};

	public getTeamForces(url: string): Observable<IType> {
		return this.http.get<IType>(url);
	};

	public addPokemon(teamList: Ipokemon[]): void {
		this.pokeTeam.next(teamList);
	};

	public removePokemon(team: Ipokemon[], pokeID: number): void {
		this.pokeTeam.next(team.filter((pokemon: Ipokemon) => pokemon.id !== pokeID));
	};

	public resetPokeTeam(): void {
		this.pokeTeam.next([]);
	};
};
