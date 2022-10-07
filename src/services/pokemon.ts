// Lib
// import axios from "axios";
// Interfaces
import { PokemonAbilities } from "../interfaces/pokemon";
// Pokemon Endpoint
const POKEMON_ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";

const TEST_DATA: PokemonAbilities = [
  {
    name: "blaze",
    url: "https://pokeapi.co/api/v2/ability/66/",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
  },
  {
    name: "solar-power",
    url: "https://pokeapi.co/api/v2/ability/94/",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png",
  },
];

export const getPokemonAbilities = async (
  pokemon: string
): Promise<PokemonAbilities> => {
  // You can use axios or any other way to make a request
  // Add your request here and return an array of abilities with at least one image if available for each item from the spirits property
  // Let useSWR handle your error
  // Throw an error when the pokemon parameter length is not bigger than 0

  return TEST_DATA;
  //  Remove TEST_DATA when adding your request, This is just a sample
};
