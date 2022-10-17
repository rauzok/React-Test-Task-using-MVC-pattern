import { TableHeadWidth } from "../../../constants/table.constants";
import { ColumnsWrapper } from "./styles";

export const Columns = () => {
  return (
    <ColumnsWrapper>
      <div style={{ width: TableHeadWidth.ID }}>Id</div>
      <div style={{ width: TableHeadWidth.NAME }}>Name</div>
      <div style={{ width: TableHeadWidth.AGE }}>Age</div>
      <div style={{ width: TableHeadWidth.ABOUT_PERSON }}>About Person</div>
      <div style={{ width: TableHeadWidth.ACTIONS }}></div>
    </ColumnsWrapper>
  )
}
