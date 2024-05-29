
import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import { structureTool } from 'sanity/structure'
import { pagebuilderTool } from "@nuagedelait/sanity-pagebuilder";


import {apiVersion, dataset, projectId} from '@/sanity/env'
import {schema} from '@/sanity/schema'
import { Icons } from '@/components/shared/icons'

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  name: "Sonamax",
  icon: Icons.logo,
  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: apiVersion }),
    // pagebuilderTool( {
    //   addBlocksSchemas: [  ],
    //   addContentSchemas: [],
    //   addManagmentSchemas: [] ,
    //   api: apiVersion
    // }),
  ],
});
