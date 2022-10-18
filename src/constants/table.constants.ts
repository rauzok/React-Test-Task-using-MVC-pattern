export enum TableHeadWidth {
  ID = '10%',
  NAME = '25%',
  AGE = '10%',
  ABOUT_PERSON = '40%',
  ACTIONS = '15%'
}

export type TTableColumnWidth = keyof typeof TableHeadWidth;

const enum ColumnList {
  ID = 'id',
  NAME = 'name',
  AGE = 'age',
  ABOUT_PERSON = 'aboutPerson'
}

export const columnsListWithWidth = [
  { field: ColumnList.ID, width: TableHeadWidth.ID },
  { field: ColumnList.NAME, width: TableHeadWidth.NAME },
  { field: ColumnList.AGE, width: TableHeadWidth.AGE },
  { field: ColumnList.ABOUT_PERSON, width: TableHeadWidth.ABOUT_PERSON },
]
