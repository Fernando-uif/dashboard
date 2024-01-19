
import { Pokedex, SimplePokemon, PokemonGrid } from "../../../pokemons";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "favoritos",
  description: "Ad ",
};

export default async function PokemonsPage() {


  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemones favoritos{" "}
        <small className="text-blue-500">Global state</small>
      </span>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        <PokemonGrid pokemons={[]} />
      </div>
    </div>
  );
}
