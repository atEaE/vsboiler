import * as vscode from 'vscode';

import * as channel from '../channel';
import { VSCodeAppError } from '../error';

/**
 * notificationWrapFunc wraps a function with error handling and notification windows
 * @param fn function to wrap
 * @returns wrapped function
 */
export const notificationWrapFunc = (fn: Function): (() => void) => {
  return () => {
    try {
      fn();
    } catch (error: unknown) {
      if (error instanceof VSCodeAppError) {
        switch (error.NotifactionType()) {
          case 'error':
            channel.pushError(error.message);
            vscode.window.showErrorMessage(error.message);
            break;
          case 'warning':
            channel.pushWarning(error.message);
            vscode.window.showWarningMessage(error.message);
            break;
          case 'info':
            channel.pushInfo(error.message);
            vscode.window.showInformationMessage(error.message);
            break;
        }
      } else if (error instanceof Error) {
        channel.pushError(error.message);
        vscode.window.showErrorMessage('An unknown error occurred');
      } else {
        channel.pushError('An unhandled error occurred');
        vscode.window.showErrorMessage('An unhandled error occurred');
      }
    }
  };
};