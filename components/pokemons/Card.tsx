import { FC } from "react";
import {
  Grid,
  Image,
  Row,
  StyledCard,
  StyledCardBody,
  StyledCardFooter,
  Text,
} from "@nextui-org/react";

import { _pokemons } from "@/interfaces";
import { useRouter } from "next/router";

interface _card extends _pokemons {}

export const Card: FC<_card> = ({ id, name, img }) => {
  const router = useRouter();
  const handleGoToPDP = () => router.push(`/pokemon/${id}`);
  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <StyledCard isHovered isPressable isPressed onClick={handleGoToPDP}>
        <StyledCardBody css={{ p: 1 }}>
          <Image src={img} css={{ width: "100%", height: 140 }} />
          <StyledCardFooter>
            <Row justify="space-between">
              <Text css={{ textTransform: "capitalize" }} h3>
                {name}
              </Text>
            </Row>
          </StyledCardFooter>
        </StyledCardBody>
      </StyledCard>
    </Grid>
  );
};
