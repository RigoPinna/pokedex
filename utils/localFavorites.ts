import { _pokemon_full } from "@/interfaces";

const getLocalFavorites = (): number[] => {
  let fav: number[] =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("favorites") || "[]")
      : [];
  return fav;
};

const existInFavorites = (id: number): boolean => {
  let fav = getLocalFavorites();
  return fav.includes(id);
};

const saveToFavorites = ({ id }: _pokemon_full) => {
  let fav = getLocalFavorites();

  fav = existInFavorites(id)
    ? fav.filter((pkmId) => pkmId !== id)
    : [...fav, id];

  localStorage.setItem("favorites", JSON.stringify(fav));
};

export default { getLocalFavorites, existInFavorites, saveToFavorites };
