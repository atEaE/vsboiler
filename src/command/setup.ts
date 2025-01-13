import * as fs from 'fs';

import * as conf from '../config/manager';
import { VSCodeAppError } from '../error/app';

/**
 * Key for the setup command
 */
export const SETUP_COMMAND_KEY = 'vsboiler.setup';

/**
 * Setup the default path
 */
export const setup = () => {
  const savepath = conf.getDefaultPath();
  if (!savepath) {
    throw new VSCodeAppError('error', 'Default path not set');
  }

  if (fs.existsSync(savepath)) {
    throw new VSCodeAppError('info', 'Default path already exists');
  }

  try {
    fs.mkdirSync(savepath, { recursive: true });
  } catch (err) {
    throw new VSCodeAppError('error', "Error creating default path", err);
  }
};