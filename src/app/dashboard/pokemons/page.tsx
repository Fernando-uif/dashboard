import Image from "next/image";
import { Pokedex, SimplePokemon, PokemonGrid } from "../../../pokemons";
import Link from "next/link";
import { notFound } from "next/navigation";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const data: Pokedex = await response.json();
  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151, 0);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de pokemon <small className="text-blue-500">Estatico</small>{" "}
      </span>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        <PokemonGrid pokemons={pokemons} />
      </div>
    </div>
  );
}
