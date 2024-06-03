
import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import { structureTool } from 'sanity/structure'
import { pagebuilderTool } from "@nuagedelait/sanity-pagebuilder";


import {apiVersion, dataset, projectId} from '@/sanity/env'
import {schema} from '@/sanity/schema'
import { siteConfig } from "@/config/site";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  name: siteConfig.name,
  icon: siteConfig.Icon,
  plugins: [
    structureTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    //visionTool({defaultApiVersion: apiVersion}),
  ],
});
