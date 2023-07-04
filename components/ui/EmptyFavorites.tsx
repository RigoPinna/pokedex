import { Container, Text } from "@nextui-org/react";
import Image from "next/image";

import styles from "./EmptyFavorites.module.css";

export const EmptyFavorites = () => {
  return (
    <Container className={styles.__container}>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        alt="Not found"
        width={250}
        height={250}
        className={styles.__image_not_found}
      />
      <Text h1>{"You don't have any favorites yet"}</Text>
    </Container>
  );
};
