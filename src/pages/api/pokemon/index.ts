import { NextApiRequest, NextApiResponse } from "next";
import { api } from "../../../lib/axios";

export interface Pokemon {
  id: string;
  name: string;
  sprites: PokemonStripes;
  types: PokemonType[];
  stats: PokemonStat[];
}

interface PokemonStripes {
  front_default: string;
  back_default: string;
}

interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface PokemonType {
  type: {
    name: string;
  };
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

    const pokemonDetailedData: Pokemon[] = pokemonDetailed.map(({ data }) => {
      return {
        id: data.id,
        name: data.name,
        sprites: data.sprites,
        stats: data.stats,
        types: data.types,
      };
    });

    return res.status(200).json(pokemonDetailedData);
  } catch (error) {
    return res.status(500).json([]);
  }
}
