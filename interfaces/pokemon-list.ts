export interface _pokemon_resp {
  count: number;
  next?: string;
  previous?: string;
  results: _pokemons[];
}

export interface _pokemons {
  id: string;
  img: string;
  name: string;
  url: string;
}
