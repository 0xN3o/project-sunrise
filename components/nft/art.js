import { useRef, useEffect } from "react";
import { renderArt } from "../../utils/art";
export default function Art(props) {
  const canvas = useRef(null);
  const { user, parent, nft } = props;

  useEffect(() => {
    if (canvas) {
      renderArt(user, parent, nft, canvas);
    }
  }, []);

  return <canvas id="myCanvas" className="h-full w-full" ref={canvas}></canvas>;
}
