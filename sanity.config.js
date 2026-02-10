// sanity.config.js
import { structureTool } from "sanity/structure";
import { defineConfig } from "sanity";
import schemas from "./schemas/schema";
import { netlifyTool } from "sanity-plugin-netlify";
export default defineConfig({
  title: "timelineportfolio",
  id: "schema-experiment",
  projectId: "7r4duhdc",
  dataset: "dbtimelineportfolio",
  plugins: [structureTool(), netlifyTool()],
  schema: {
    types: schemas,
  },
});
