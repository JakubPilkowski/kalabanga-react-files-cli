import { ArgumentsCamelCase } from "yargs";
import fs from "fs";

import typesTemplate from "templates/typesTemplate";

import { GenerateTypesArgs } from "./generateTypes.types";

export default function generateTypesHandler(
  args: ArgumentsCamelCase<GenerateTypesArgs>
): void | Promise<void> {
  const { name, suffix } = args;

  const template = typesTemplate({
    name,
    suffix,
    baseTypes: ["BaseProps"],
    imports: ["import type Other from './Other';"],
    mappings: ["className?: string;"],
    exports: ["Other"],
  });

  /**
   * Step
   * creating file
   */
  const templateString = template.join("\n");

  fs.writeFile(`${name}.types.ts`, templateString, (err) => {
    if (err) {
      console.log("error", err);
    }
  });
}
