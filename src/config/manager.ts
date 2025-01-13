import * as vscode from 'vscode';


const COFIG_CATEGORY = 'vsboiler';

const DEFAULT_VSBOILER_PATH_KEY = 'defaultVSBoilerPath';

/**
 * 
 * @returns the default directory path for the boilerplate
 */
export const getDefaultPath = (): string => {
  let val = vscode.workspace.getConfiguration(COFIG_CATEGORY).get<string>(DEFAULT_VSBOILER_PATH_KEY);
  return val ? val.trim() : '';
};