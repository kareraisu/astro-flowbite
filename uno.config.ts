import { defineConfig, presetUno, presetAttributify, transformerDirectives, transformerAttributifyJsx } from "unocss";
import presetIcons from "@unocss/preset-icons";
export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
  ],  transformers: [
    transformerDirectives(),
    transformerAttributifyJsx(), 
  ],
});