export enum EMessages {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  REMOVE = 'REMOVE'
}

export type TMessage = keyof typeof EMessages;

export interface IActionMessage {
  type: TMessage;
  value: string;
}
