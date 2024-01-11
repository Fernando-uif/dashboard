import Link from "next/link";
import React from "react";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import Image from "next/image";
import { IoHeartCircleOutline } from "react-icons/io5";

interface Props {
  infoPokemon: SimplePokemon;
}

export const PokemonCard = ({ infoPokemon }: Props) => {
  const { id, name } = infoPokemon;
  return (
    <>
      <div className="mx-auto right-0 mt-2 w-60">
        <div className="bg-white rounded overflow-hidden shadow-lg">
          <div className="text-center p-6 bg-gray-800 border-b">
            <figure className="flex justify-center">
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt="pokemon"
                width={100}
                height={100}
              />
            </figure>

            <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
              {name}
            </p>

            <div className="mt-5">
              <Link
                href={`/dashboard/pokemon/${id}`}
                className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
              >
                Saber mas
              </Link>
            </div>
          </div>
          <div className="border-b">
            <Link href="/account/campaigns">
              <span className="px-4 py-2 hover:bg-gray-100 flex items-center">
                <div className="text-red-600">
                  <IoHeartCircleOutline/>
                </div>
                <div className="pl-3">
                  <p className="text-sm font-medium text-gray-800 leading-none">
                    No es Favorito
                  </p>
                  <p className="text-xs text-gray-500">View your campaigns</p>
                </div>
              </span>
            </Link>
           
          </div>

       
        </div>
      </div>
    </>
  );
};
