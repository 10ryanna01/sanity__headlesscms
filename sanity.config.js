// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import schemas from './schemas/schema';

export default defineConfig({
  title: "timelineportfolio",
  projectId: "7r4duhdc",
  dataset: "dbtimelineportfolio",
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});