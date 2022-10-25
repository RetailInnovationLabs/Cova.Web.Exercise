// Do not modify these interfaces
export interface PokemonAbility {
  name: string;
  url: string;
  image?: string;
}

export type PokemonAbilities = Array<PokemonAbility>;

export interface PokemonSearchForm {
  searchValue: string;
}
