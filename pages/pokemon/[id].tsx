import { pokeApi } from "@/api";
import { Layout } from "@/components/layouts";
import { _params_pdp, _pokemon_full, _pokemons } from "@/interfaces";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";

/**
 * The PDP Pokemon Details Page.
 */
interface props {
  pokemon: _pokemon_full;
}
const PDP: NextPage<props> = ({ pokemon }) => {
  return (
    <Layout>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable={true}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default || "img.jpg"
                }
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-around" }}
            >
              <Text transform="capitalize" h1>
                {pokemon.name}
              </Text>
              <Button color="gradient" ghost>
                Save Favorites
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction="row" display="flex">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
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
