import { _state_card, _use_card } from "@/interfaces";
import { getColorImg } from "@/utils";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useCard = ({ imgRef, id }: _use_card) => {
  const router = useRouter();
  const [isHover, setIsHover] = useState(false);
  const [background, setBackground] = useState<_state_card>({
    normal: "#16181A",
  });

  useEffect(() => {
    if (!!imgRef.current) {
      imgRef.current.setAttribute("crossOrigin", "");
      const { R, G, B } = getColorImg(imgRef.current, 4);
      setBackground({ ...background, hovering: `rgba(${R},${G},${B},0.5)` });
    }
  }, [imgRef.current]);

  const handleGoToPDP = () => router.push(`/pokemon/${id}`);

  return {
    background,
    isHover,
    handleGoToPDP,
    setIsHover,
  };
};
