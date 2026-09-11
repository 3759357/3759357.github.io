import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://3759357.github.io",
  output: "static",
  integrations: [sitemap()],
});
