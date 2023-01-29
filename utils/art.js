import { renderIcon } from "@carrotn0se/blockies";
export function renderArt(user, parent, tokenId, canvas) {
  renderIcon(
    {
      patternseed: tokenId.toString().toLowerCase(),
      colorseed: user.toString().toLowerCase(),
      spotcolorseed: parent.toString().toLowerCase(),
      bgcolor: "#222",
      bgcolorratio: 10,
      colorratio: 4,
      spotcolorratio: 1,

      size: 16,
      scale: 10,
    },
    canvas
  );
}
