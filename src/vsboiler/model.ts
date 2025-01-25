import * as fs from 'fs';

/**
 * VSBoiler model
 */
export type VSBoiler = {
  root: string;
  boilerplates: VSBoilerplate[];
};

export type VSBoilerplate = {
  id: string;
  name: string;
}

/**
 * load VSBoiler object from file
 * @param filePath vsboiler.json file path
 * @returns VSBoiler object
 */
export function loadFile(filePath: string): VSBoiler {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data) as VSBoiler;
}
