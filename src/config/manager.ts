import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

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
    const resolved = path.resolve(val);
    try {
      fs.accessSync(resolved, fs.constants.F_OK);
    } catch (err) {
      throw new VSCodeAppError('error', 'Default path does not exist', err);
    }
  }
};