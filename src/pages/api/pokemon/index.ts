import { NextApiRequest, NextApiResponse } from "next";
import { api } from "../../../lib/axios";

interface Pokemon {
  id: string;
  name: string;
  sprites: PokemonStripes;
}

interface PokemonStripes {
  front_default: string;
  back_default: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Pokemon[]>
) {
  try {
    const { data } = await api.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20"
    );

    const pokemonDetailedDataPromises = data.results.map(
      ({ url }: { url: string }) => {
        return api.get(url);
      }
    );

    const pokemonDetailed = await Promise.all(pokemonDetailedDataPromises);

    const pokemonDetailedData: Pokemon[] = pokemonDetailed.map(
      ({ data }) => data
    );

    return res.status(200).json(pokemonDetailedData);
  } catch (error) {
    return res.status(500).json([]);
  }
}
