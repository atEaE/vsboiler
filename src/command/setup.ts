import * as vscode from 'vscode';
import * as fs from 'fs';

import * as conf from '../config';
import * as util from '../utils';
import { VSCodeAppError } from '../error';

/**
 * Key for the setup command
 */
export const SETUP_COMMAND_KEY = 'vsboiler.setup';

/**
 * Setup the default path
 */
export const setup = () => {
  // check
  conf.validate();

  const val = conf.getDefaultPath();
  const savepath = util.fileutil.resolve(val);

  if (fs.existsSync(savepath)) {
    throw new VSCodeAppError('info', 'Default path already exists');
  }

  try {
    fs.mkdirSync(savepath, { recursive: true });
    vscode.window.showInformationMessage('Default path created');
  } catch (err) {
    throw new VSCodeAppError('error', "Error creating default path", err);
  }
};