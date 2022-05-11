type PokemonType =
  | "fighting"
  | "flying"
  | "poison"
  | "ground"
  | "rock"
  | "bug"
  | "ghost"
  | "steel"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "psychic"
  | "ice"
  | "normal"
  | "default";

const pokemonTypesArray: PokemonType[] = [
  "fighting",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "normal",
  "default",
];

export const pokemonTypesColors = {
  fighting: "#c02f27",
  flying: "#874fff",
  poison: "#9e549e",
  ground: "#d8b775",
  rock: "#af9d4d",
  bug: "#bdcd74",
  ghost: "#6c588d",
  steel: "#7c969e",
  fire: "#e08847",
  water: "#879fdb",
  grass: "#2fb636",
  electric: "#bc974f",
  psychic: "#cd3c76",
  ice: "#b1d8d8",
  normal: "#a7a7a7",
  default: "#1d1d1d",
};

export const getPokemonTypeColor = (pokemonType: string): string => {
  const availableColorType = pokemonTypesArray.find(
    (element) => element === pokemonType
  );

  const type = availableColorType || "default";

  return pokemonTypesColors[type];
};
