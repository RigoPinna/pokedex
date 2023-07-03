import { Grid } from "@nextui-org/react";
import React, { FC } from "react";
import { Card } from "../pokemons";
interface _fav_list {
  list: number[];
}
export const FavoritesList: FC<_fav_list> = ({ list }) => {
  return (
    <Grid.Container gap={2} justify="flex-start">
      {list.map((id) => (
        <Card
          key={`fav-list-${id}`}
          id={`${id}`}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        />
      ))}
    </Grid.Container>
  );
};
