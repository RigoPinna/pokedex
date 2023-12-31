import { useState } from "react";

import { useRouter } from "next/router";

import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

import confetti from "canvas-confetti";

import { Layout } from "@/components/layouts";
import { IconRowLeft } from "@/components/ui/icons";

import { pokeApi } from "@/api";
import { LocalFavorites } from "@/utils";

import { _params_pdp, _pokemon_full, _pokemons } from "@/interfaces";

/**
 * The PDP Pokemon Details Page.
 */
interface props {
  pokemon: _pokemon_full;
}
const PDP: NextPage<props> = ({ pokemon }) => {
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(
    LocalFavorites.existInFavorites(pokemon.id)
  );
  const handleGoToHome = () => router.back();
  const handleToggleFav = () => {
    LocalFavorites.saveToFavorites(pokemon);
    setIsFavorite(!isFavorite);
    !isFavorite &&
      confetti({
        zIndex: 9999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0,
        },
      });
  };

  return (
    <Layout title={pokemon.name}>
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
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Container
                direction="row"
                display="flex"
                gap={6}
                css={{ width: "fit-content", padding: "0", margin: "0" }}
              >
                <Button
                  onPress={handleGoToHome}
                  bordered
                  color="primary"
                  rounded
                  size="xs"
                  ghost
                  css={{
                    marginTop: "auto",
                    marginBottom: "auto",
                    marginRight: "10px",
                    padding: "10px",
                    height: "30px",
                  }}
                >
                  <IconRowLeft />
                  <span>Volver</span>
                </Button>
                <Text transform="capitalize" h1>
                  {pokemon.name}
                </Text>
              </Container>
              <Button
                color="gradient"
                ghost={!isFavorite}
                onPress={handleToggleFav}
              >
                {isFavorite ? "Remove favorite" : "Add favorite"}
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
