import { defineConfig } from "sanity";

import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "2h33ujop",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-03-05",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
