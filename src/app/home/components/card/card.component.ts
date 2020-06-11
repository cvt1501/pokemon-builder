import { Component, Input, OnInit } from '@angular/core';

import { pokeType } from '../../shared';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})

/**
 * @author Kevin Cavenatti <kevin_cavenatti@hotmail.com>
 * @version 1.0.0
 */

export class CardComponent implements OnInit {
	@Input() pokeName: string;
	@Input() pokeSprite: string;
	@Input() pokeTypes: string;
	
	private viewPokeTypes: pokeType[];

	constructor() {};

	public ngOnInit(): void {
		this.viewPokeTypes = JSON.parse(this.pokeTypes);
	};

	public get pokemonTypes(): pokeType[] {
		return this.viewPokeTypes;
	};
}
