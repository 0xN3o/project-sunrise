import { renderIcon } from "@carrotn0se/blockies";
export function renderArt(user, parent, nft, canvas) {
  renderIcon(
    {
      patternseed: nft,
      colorseed: user,
      spotcolorseed: parent,
      bgcolor: "#222",
      bgcolorratio: 10,
      colorratio: 4,
      spotcolorratio: 1,

      size: 16,
      scale: 10,
    },
    canvas.current
  );
}
