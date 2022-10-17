export enum TableHeadWidth {
  ID = '10%',
  NAME = '25%',
  AGE = '10%',
  ABOUT_PERSON = '40%',
  ACTIONS = '15%'
}

export type TTableColumnWidth = keyof typeof TableHeadWidth;
