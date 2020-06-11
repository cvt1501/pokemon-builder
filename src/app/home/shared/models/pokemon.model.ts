import { pokeType, pokeSprites } from '../types';

/**
 * @author Kevin Cavenatti <kevin_cavenatti@hotmail.com>
 * @version 1.0.0
 */

export interface Ipokemon {
    name: string;
    id: number;
    types: pokeType[];
    sprites: pokeSprites;
}