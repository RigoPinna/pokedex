import { FC, useRef } from "react";
import { Grid, Image, Row, Card as UICard, Text } from "@nextui-org/react";

import { _pokemons } from "@/interfaces";

interface _card {
  id: string;
  name?: string;
  src: string;
}
import styles from "./Card.module.css";
import { useCard } from "@/hooks/useCard";

export const Card: FC<_card> = ({ id, name, src }) => {
  const ref = useRef<HTMLImageElement>(null);
  const { background, isHover, handleGoToPDP, setIsHover } = useCard({
    imgRef: ref,
    id,
  });
  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <UICard
        isHoverable
        isPressable
        onPress={handleGoToPDP}
        css={{ overflow: "initial" }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <UICard.Body
          className={styles.__card_body}
          css={{
            p: 1,
            overflow: "initial",
            borderRadius: "10px",
            background: isHover ? background.hovering : background.normal,
          }}
        >
          <Image
            ref={ref}
            id={`pokemon_img_${id}`}
            src={src}
            css={{ width: "100%", height: 140 }}
          />
          {!!name && (
            <UICard.Footer className={styles.__card_footer}>
              <Row justify="space-between">
                <Text css={{ textTransform: "capitalize" }} h3>
                  {name}
                </Text>
              </Row>
            </UICard.Footer>
          )}
        </UICard.Body>
      </UICard>
    </Grid>
  );
};
