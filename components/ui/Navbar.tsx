import { Spacer, Text } from "@nextui-org/react";
import styles from "./Navbar.module.css";
export const Navbar = () => {
  return (
    <>
      <div className={styles.__navbar_wrapper}>
        <Text h3>Pokemon</Text>
        <Spacer css={{ flex: 1 }} />
        <Text>Item</Text>
        <Text>Item</Text>
        <Text>Item</Text>
      </div>
    </>
  );
};
