import { Component, OnInit } from '@angular/core';

import { ListService, TeamService } from '../../services';
import { IpokemonList, Ipokemon, pokeObject } from '../../shared';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})

/**
 * @author Kevin Cavenatti <kevin_cavenatti@hotmail.com>
 * @version 1.0.0
 */

export class ListComponent implements OnInit {
	private pokemons: Ipokemon[] = new Array;
	private viewPokes: Ipokemon[] = new Array;
	private pokeTeam: Ipokemon[] = new Array;
	public loading: boolean = true;

  	constructor(private ListService: ListService, private TeamService: TeamService) {}

	public ngOnInit(): void {
		if (localStorage['pokeList']) {
			this.pokemons = JSON.parse(localStorage['pokeList']);
			this.viewPokes = this.pokemons;
			this.loading = false;
			this.updatePokeTeam();
		} else {
			this.updateList();
			this.updatePokeTeam();
		}
	};

	private updateList(): void {
		this.ListService.getPokeList().subscribe((pokeList: IpokemonList) => {
			pokeList.results.forEach((cur: pokeObject) => {
				this.ListService.getPokeProperties(cur.url).subscribe((pokemon: Ipokemon) => {
					const { name, id, types, sprites } = pokemon, newPoke: Ipokemon = { name: name, id: id, types: types, sprites: sprites };
					
					this.loading = false;
					this.pokemons.push(newPoke);
					this.viewPokes = this.pokemons.sort((a: Ipokemon, b: Ipokemon) => a.id - b.id);
					localStorage['pokeList'] = JSON.stringify(this.viewPokes);
				});
			});
		});
	};

	private updatePokeTeam(): void {
		this.TeamService.getPokeTeam().subscribe((pokemonTeam: Ipokemon[]) => {
			this.pokeTeam = pokemonTeam;
			this.viewPokes = this.ListService.changeList(this.pokemons, this.pokeTeam);
		});
	};

	public addToTeam(pokemon: Ipokemon): void {
		if (this.pokeTeam.length <= 5) {
			this.pokeTeam.push(pokemon);
			this.TeamService.addPokemon(this.pokeTeam);
			window.scrollTo({top: 0, behavior: 'smooth'});
		} else {
			window.alert('Você ja possui 6 pokemons! Remova algum deles para poder adicionar mais');
		}
	};

	public get viewPokemons(): Ipokemon[] {
		return this.viewPokes;
	};

	public set filter(value: string) {
		this.viewPokes = this.ListService.filterPoke(this.pokemons, value);
	};
}
