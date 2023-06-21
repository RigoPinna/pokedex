import { pokeApi } from "@/api";
import { _params_pdp, _pokemon_full, _pokemons } from "@/interfaces";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";

/**
 * The PDP Pokemon Details Page.
 */
interface props {
  pokemon: _pokemon_full;
}
const PDP: NextPage<props> = ({ pokemon }) => {
  return <div>{pokemon.name}</div>;
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pkms: _params_pdp[] = [...Array(151)].map((value, i) => ({
    params: { id: `${i + 1}` },
  }));

  return {
    paths: pkms,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data: pokemon } = await pokeApi.get<_pokemon_full>(`/pokemon/${id}`);
  return {
    props: {
      pokemon,
    },
  };
};
export default PDP;
