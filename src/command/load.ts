import * as vscode from 'vscode';
import * as fs from 'fs';
import path from 'path';

import * as conf from '../config';
import { VSCodeAppError } from '../error/app';
import * as vsboiler from '../vsboiler';


/**
 * Command key for loading the boilerplate.
 */
export const LOAD_COMMAND_KEY = 'vsboiler.load';

/**
 * Load the boilerplate
 */
export const load = async () => {
  // check
  conf.validate();


  const loadRootDir = await vscode.window.showInputBox();
  let validErr = validDirpath(loadRootDir);
  if (validErr) {
    throw validErr;
  }

  const boilerfile = path.join(loadRootDir!, 'boilerplate.json');
  validErr = validBoilerfile(boilerfile);
  if (validErr) {
    throw validErr;
  }

  const boiler = vsboiler.loadFile(boilerfile);
  const boilerBaseRoot = path.join(loadRootDir!, boiler.root);
  validErr = validDirpath(boilerBaseRoot);
  if (validErr) {
    throw validErr;
  }
  
  
  // todo - create boilerplate
};

const validDirpath = (dirpath: string | undefined): VSCodeAppError | undefined => {
  if (!dirpath) {
    return new VSCodeAppError('warning', 'No path provided');
  }

  if (!fs.existsSync(dirpath)) {
    return new VSCodeAppError('warning', 'Path does not exist');
  }

  const stat = fs.statSync(dirpath);
  if (!stat.isDirectory()) {
    return new VSCodeAppError('warning', 'Path is not a directory');
  }

  return undefined;
};

const validBoilerfile = (boilerfile: string): VSCodeAppError | undefined => {
  if (!fs.existsSync(boilerfile)) {
    return new VSCodeAppError('error', 'Boilerplate file does not exist');
  }

  const stat = fs.statSync(boilerfile);
  if (!stat.isFile()) {
    return new VSCodeAppError('error', 'Boilerplate is not a file');
  }
};