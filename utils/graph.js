import { renderArt } from "./art";

export function createCtxRenderer(user, parent, tokenId) {
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
    return {
      // bellow arrows
      // primarily meant for nodes and the labels inside of their boundaries
      drawNode() {
        const r = style.size;

        var nft = document.createElement("canvas");
        nft.height = r;
        nft.width = r;
        renderArt(user, parent, tokenId, nft);
        ctx.drawImage(nft, x - r / 2, y - r / 2, r, r);

        ctx.font = "normal 12px sans-serif";
        ctx.fillStyle = "black";
      },
      // above arrows
      // primarily meant for labels outside of the node
      drawExternalLabel() {
        // ctx.drawSomeTextOutsideOfTheNode();
      },
      // node dimensions defined by node drawing
      nodeDimensions: { width: style.size, height: style.size },
    };
  };
}
