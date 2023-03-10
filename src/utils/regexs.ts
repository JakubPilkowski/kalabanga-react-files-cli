export const pascalCase = /[A-Z][a-z]+[A-Z]?[a-z]*$/g;

export const kebabCase = /[a-z0-9]+(?:-[a-z0-9]+)*$/g;

export const variableFormat = /\{\{(.+?)\}\}/g;

export const ternaryFormat = /\{\?((.+\|){1,2}(.+)?)\?\}/g;
