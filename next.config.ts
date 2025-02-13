import path from "path";
import { fileURLToPath } from "url";
import stylexPlugin from "@stylexswc/nextjs-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default stylexPlugin({
  rsOptions: {
    aliases: {
      "@/*": [
        path.join(__dirname, "*")
      ],
    },
    unstable_moduleResolution: {
      type: "commonJS",
    },
  }
})({});
