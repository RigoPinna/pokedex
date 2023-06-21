import { GetStaticProps, NextPage } from "next";
import { Layout } from "@/components/layouts";
import { Grid } from "@nextui-org/react";
import { pokeApi } from "@/api";
import { _home, _pokemon_resp, _pokemons } from "@/interfaces";
import { Card } from "@/components/pokemons";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<_pokemon_resp>("/pokemon?limit=151");
  const pokemons: _pokemons[] = data.results.map((pokemon, id) => ({
    ...pokemon,
    id: `${id + 1}`,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      id + 1
    }.svg`,
  }));
  return {
    props: {
      pokemons,
    },
  };
};

const Home: NextPage<_home> = ({ pokemons }) => {
  return (
    <>
      <Layout title="Pokemos">
        <Grid.Container gap={2} justify="flex-start">
          {pokemons.map((pkm) => (
            <Card key={`${pkm.id}-${pkm.name}`} {...pkm} />
          ))}
        </Grid.Container>
      </Layout>
    </>
  );
};

export default Home;
