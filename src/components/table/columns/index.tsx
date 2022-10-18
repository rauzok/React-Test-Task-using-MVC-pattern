import { TableHeadWidth } from "../../../constants/table.constants";
import { ColumnsWrapper, Column } from "./styles";

export const Columns = () => {
  return (
    <ColumnsWrapper>
      <Column style={{ width: TableHeadWidth.ID }}>Id</Column>
      <Column style={{ width: TableHeadWidth.NAME }}>Name</Column>
      <Column style={{ width: TableHeadWidth.AGE }}>Age</Column>
      <Column style={{ width: TableHeadWidth.ABOUT_PERSON }}>About Person</Column>
      <div style={{ width: TableHeadWidth.ACTIONS }}></div>
    </ColumnsWrapper>
  )
}
