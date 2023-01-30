import { renderArt } from "./art";

export function createCtxRenderer(user, parent, tokenId, labelBgColor) {
  return function ctxRenderer({
    ctx,
    id,
    x,
    y,
    state: { selected, hover },
    style,
    label,
  }) {
    // do some math here
    const r = style.size;
    return {
      // bellow arrows
      // primarily meant for nodes and the labels inside of their boundaries
      drawNode() {
        var nft = document.createElement("canvas");
        nft.height = r;
        nft.width = r;
        renderArt(user, parent, tokenId, nft);
        ctx.drawImage(nft, x - r / 2, y - r / 2, r, r);
      },
      // above arrows
      // primarily meant for labels outside of the node
      drawExternalLabel() {
        const yOffset = 4;
        ctx.font = "14px Chivo Mono";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.fillStyle = labelBgColor || "#fff";
        const textWidth = ctx.measureText(tokenId).width;
        const xPadding = 6;
        const yPadding = 2;
        const boxY = y + r / 2 + yOffset;
        ctx.fillRect(
          x - (textWidth / 2 + xPadding),
          boxY,
          textWidth + xPadding * 2,
          20 + yPadding * 2
        );

        ctx.fillStyle = "black";
        ctx.fillText(tokenId, x, boxY + 12);
      },
      // node dimensions defined by node drawing
      nodeDimensions: { width: style.size, height: style.size },
    };
  };
}
