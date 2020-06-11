import { Component, OnInit } from '@angular/core';

import { TeamService } from '../../services';
import { Ipokemon, IType, demageType, formatTeamForce } from '../../shared';

@Component({
	selector: 'app-team',
	templateUrl: './team.component.html',
	styleUrls: ['./team.component.scss']
})

/**
 * @author Kevin Cavenatti <kevin_cavenatti@hotmail.com>
 * @version 1.0.0
 */

export class TeamComponent implements OnInit {
	private pokeTeam: Ipokemon[] = new Array;
	private teamWeakness: demageType[];
	private teamImmunity: demageType[];
	private teamResistence : demageType[];
	public showTeamResult: boolean = false;

	constructor(private TeamService: TeamService) {}

	public ngOnInit(): void {	
		this.getTeam();
	};

	public getTeam(): void {
		this.TeamService.getPokeTeam().subscribe((newPokeTeam: Ipokemon[]) => {
			this.pokeTeam = newPokeTeam;
			this.getForceTeam();
		});
	};

	public removePoke(pokeID: number): void {
		this.TeamService.removePokemon(this.pokeTeam, pokeID);
		this.showTeamResult = false;
	};

	public getForceTeam(): void {
		this.teamWeakness = new Array;
		this.teamImmunity = new Array;
		this.teamResistence = new Array;

		this.pokeTeam.forEach((pokemon: Ipokemon) => {
			for (let pokemonType of pokemon.types) {
				this.TeamService.getTeamForces(pokemonType.type.url).subscribe((pokeType: IType) => {
					this.teamWeakness.push(pokeType.damage_relations.double_damage_from);
					this.teamImmunity.push(pokeType.damage_relations.no_damage_from);
					this.teamResistence.push(pokeType.damage_relations.half_damage_from);
				});
			}
		});
	};

	public buildForceTeam(): void {
		this.teamWeakness = formatTeamForce(this.teamWeakness);
		this.teamImmunity = formatTeamForce(this.teamImmunity);
		this.teamResistence = formatTeamForce(this.teamResistence);
		this.showTeamResult = true;
	}

	public resetAll(): void {
		this.TeamService.resetPokeTeam();
		this.teamWeakness = new Array;
		this.teamImmunity = new Array;
		this.teamResistence = new Array;
		this.showTeamResult = false;
	};

	public get pokemonTeam(): Ipokemon[] {
		return this.pokeTeam;
	};

	public get viewTeamWeakness(): demageType[] {
		return this.teamWeakness;
	}

	public get viewTeamImmunity(): demageType[] {
		return this.teamImmunity;
	}

	public get viewTeamResistence(): demageType[] {
		return this.teamResistence;
	}
}
