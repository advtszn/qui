import { defineConfig } from "astro/config";

// Fully static: no adapter, no UI framework integrations.
// Set `site` once the domain is known, for canonical and Open Graph URLs.
export default defineConfig({
  output: "static",
});
