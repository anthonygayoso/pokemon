export interface IPokemon {
    id: number,
    name: string,
    weight:number,
    height: number,
    sprites: ISprite,
    stats: Array<IStats>,
    base_experience: number,
    abilities: Array<IAbilities>
}

export interface ISprite{
    back_default: string,
    back_shiny: string
}

export interface IStats{
    base_stat: number,
    effort: number,
    stat: IStat
}

export interface IStat{
    name: string,
    url: string
}

export interface IAbilities{
    is_hidden: boolean,
    slot: number,
    ability: IAbilitie 
}

export interface IAbilitie{
    name: string,
    url: string
}
