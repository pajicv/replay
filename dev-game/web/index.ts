import { renderCanvas } from "../../packages/replay-web/src";
import { t } from "../../packages/replay-core/src";
import { Game, gameProps } from "../src";

// defined in webpack
declare const ASSET_NAMES: {};

renderCanvas(
  Game(gameProps),
  [
    t.text({
      color: "black",
      text: "Loading...",
    }),
  ],
  ASSET_NAMES,
  "scale-up"
);
