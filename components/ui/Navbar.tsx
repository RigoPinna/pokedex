import { Link, Spacer, Text } from "@nextui-org/react";
import styles from "./Navbar.module.css";
export const Navbar = () => {
  return (
    <>
      <div className={styles.__navbar_wrapper}>
        <Link href="/">
          <Text h3>rPokemon</Text>
        </Link>
        <Spacer css={{ flex: 1 }} />
        <Link href="/favorites">
          <Text>Favoritos</Text>
        </Link>
      </div>
    </>
  );
};
