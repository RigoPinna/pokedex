export const getColorImg = (img: Element | null, ratio: number) => {
  try {
    const canvas = document.createElement("canvas");
    let width = (canvas.width = 143);
    let height = (canvas.height = 143);
    const ctx = canvas.getContext("2d");

    //@ts-ignore
    ctx.drawImage(img, 0, 0);
    let data,
      length,
      i = -4,
      count = 0;
    data = ctx?.getImageData(0, 0, width, height);
    length = data?.data.length || 0;
    let R = 0,
      G = 0,
      B = 0;
    while ((i += ratio * 4) < length) {
      ++count;
      R += data?.data[i] || 0;
      G += data?.data[i + 1] || 0;
      B += data?.data[i + 2] || 0;
    }
    R = ~~(R / count);
    G = ~~(G / count);
    B = ~~(B / count);
    return {
      R,
      G,
      B,
    };
  } catch (error) {
    console.log(error);
    return {
      R: 0,
      G: 0,
      B: 0,
    };
  }
};
