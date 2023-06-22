import { RefObject } from "react";

export type colorBg = `rgba(${number},${number},${number},0.5)`;
export type _state_card = { normal: "#16181A"; hovering?: colorBg };
export interface _use_card {
  imgRef: RefObject<HTMLImageElement>;
  id: string;
}
