import * as vscode from 'vscode';

const outputChannel = vscode.window.createOutputChannel('VSBoiler');


/**
 * activates the output channel
 * @param context vscode.ExtensionContext
 */
export const activate = (context: vscode.ExtensionContext) => {
  outputChannel.show();
};

/**
 * Pushes a info message to the output channel
 * @param message info message
 */
export const pushInfo = (message: string) => {
  outputChannel.appendLine(`[INFO] ${message}`);
};

/**
 * pushes a warning message to the output channel
 * @param message warning message
 */
export const pushWarning = (message: string) => {
  outputChannel.appendLine(`[WARNING] ${message}`);
};

/**
 * pushes an error message to the output channel
 * @param message error message
 */
export const pushError = (message: string) => {
  outputChannel.appendLine(`[ERROR] ${message}`);
};
