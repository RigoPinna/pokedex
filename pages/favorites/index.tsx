import { Layout } from "@/components/layouts";
import { Card } from "@/components/pokemons";
import { EmptyFavorites } from "@/components/ui/EmptyFavorites";
import { FavoritesList } from "@/components/ui/FavoritesList";
import { LocalFavorites } from "@/utils";
import { NextPage } from "next";
import { useState, useEffect } from "react";

const FovoritesPage:NextPage = () => {
  const [favoritesList, setFavoritesList] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesList(LocalFavorites.getLocalFavorites());
  }, []);

  return (
    <Layout title="Favoritos">
      {favoritesList.length > 0 ? <FavoritesList list={favoritesList}/> : (
        <EmptyFavorites />
      )}
    </Layout>
  );
};

export default FovoritesPage;
