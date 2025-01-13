

type VSCodeAppErrorNotificationType = 'error' | 'warning' | 'info';

/**
 * Error class for the VSCode app
 */
export class VSCodeAppError extends Error {
  /**
   * Type of notification
   * vscode.windows message handling
   */
  private type: VSCodeAppErrorNotificationType;

  /**
   * Origin of the error
   */
  private origin?: Error;

  constructor(
    type: VSCodeAppErrorNotificationType, 
    message?: string,
    origin?: unknown
  ) {
    super(message, {cause: origin instanceof Error ? origin : undefined});

    this.name = new.target.name;
    this.type = type;
    this.origin = origin instanceof Error ? origin : undefined;
  }

  public NotifactionType(): VSCodeAppErrorNotificationType {
    return this.type;
  }

  public Origin(): Error | undefined {
    return this.origin;
  }
}

