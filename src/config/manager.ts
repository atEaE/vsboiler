import * as vscode from 'vscode';

import { VSCodeAppError } from '../error';

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

/**
 * validate the configuration
 */
export const validate = (): void => {
  // get the default path
  {
    const val = getDefaultPath();
    if (!val) {
      throw new VSCodeAppError('error', 'Default path not set');
    }
    
    if (val.trim().length === 0) {
      throw new VSCodeAppError('error', 'Default path not set');
    }
    
    const invalidChars =  /[<>:\"\|?*\x00]/;
    if (invalidChars.test(val))  {
      throw new VSCodeAppError('error', 'Default path contains invalid characters');
    }
  }
};


