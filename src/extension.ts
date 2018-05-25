'use strict'
import * as vscode from 'vscode'
import {generateConnectTypes} from 'generate-connect-types'

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'extension.generateConnectTypes',
    () => {
      if (vscode.window.activeTextEditor) {
        const currentlyOpenTabfilePath =
          vscode.window.activeTextEditor.document.fileName

        generateConnectTypes(currentlyOpenTabfilePath)
          .then(() => vscode.window.showInformationMessage('Generated types!'))
          .catch((err: Error) =>
            vscode.window.showErrorMessage('Could not generate types!'),
          )
      } else {
        vscode.window.showInformationMessage(
          'This only works inside typescript files',
        )
      }
    },
  )

  context.subscriptions.push(disposable)
}

export function deactivate() {}
