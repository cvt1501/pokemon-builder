import { pokeObject } from '../types';

/**
 * @author Kevin Cavenatti <kevin_cavenatti@hotmail.com>
 * @version 1.0.0
 */

export interface IpokemonList {
    next?: string;
    results: pokeObject[];
}