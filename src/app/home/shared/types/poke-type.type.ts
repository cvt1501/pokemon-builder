/**
 * @author Kevin Cavenatti <kevin_cavenatti@hotmail.com>
 * @version 1.0.0
 */

export type pokeType = {
    type: {
        name: string,
        url: string
    }
};

export type demageType = {
    name: string,
    url?: string
};

export type damageRelationsType = {
    double_damage_from: demageType,
    half_damage_from: demageType,
    no_damage_from: demageType
};
