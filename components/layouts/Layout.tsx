import React, { FC } from "react";
import Head from "next/head";
import { _layout } from "./types";

export const Layout: FC<_layout> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="description" content="Informacion sobre el pokemon" />
      </Head>
      <main>{children}</main>
    </>
  );
};
