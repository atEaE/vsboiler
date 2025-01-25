import * as vscode from 'vscode';

import * as service from './services';
import * as channel from './channel';
import * as command from './command';

/**
 * activate is called when your extension is activated
 * @param context vscode.ExtensionContext
 */
export function activate(context: vscode.ExtensionContext) {
	channel.activate(context);
	activateCommand(context);

	channel.pushInfo('"vsboiler" has been activated');
}

/**
 * activateCommand is called when your extension is activated
 * @param context vscode.ExtensionContext
 */
const activateCommand = (context: vscode.ExtensionContext) => {
	const setupCmd = vscode.commands.registerCommand(
		command.SETUP_COMMAND_KEY,
		service.notificationWrapFunc(command.setup),
	);
	const loadCmd = vscode.commands.registerCommand(
		command.LOAD_COMMAND_KEY,	
		service.notificationWrapFunc(command.load),
	);

	context.subscriptions.push(setupCmd);
	context.subscriptions.push(loadCmd);
};

/**
 * deactivate is called when your extension is deactivated
 */
export function deactivate() {
	console.log('"vsboiler" has been deactivated!');
}
