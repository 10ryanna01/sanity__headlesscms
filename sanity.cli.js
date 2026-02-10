import { defineCliConfig } from "sanity/cli";
export default defineCliConfig({
  //define graphQL settings
  //TODO switch to GROQ in docs
  api: {
    projectId: "timelineportfolio",
    dataset: "dbtimelineportfolio",
  },
  graphql: [
    {
      playground: true,
      tag: "timeline__graphQL",
      id: "schema-experiment",
    },
  ],
});
