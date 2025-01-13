import * as vscode from 'vscode';

import * as command from './command';

/**
 * activate is called when your extension is activated
 * @param context vscode.ExtensionContext
 */
export function activate(context: vscode.ExtensionContext) {
	/**
	 * Command
	 */
	const setupCmd = vscode.commands.registerCommand(
		command.SETUP_COMMAND_KEY,
		command.setup
	);
	context.subscriptions.push(setupCmd);
	
	console.log('"vsboiler" is now active!');
}

/**
 * deactivate is called when your extension is deactivated
 */
export function deactivate() {
	console.log('"vsboiler" has been deactivated!');
}
