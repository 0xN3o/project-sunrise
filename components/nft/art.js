import { renderIcon } from "@carrotn0se/blockies";
import { useRef, useEffect } from "react";
export default function Art(props) {
  const canvas = useRef(null);
  const { user, parent, nft } = props;

  useEffect(() => {
    console.log(nft, user, parent);
    if (canvas) {
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
  }, []);

  return <canvas id="myCanvas" className="h-full w-full" ref={canvas}></canvas>;
}
