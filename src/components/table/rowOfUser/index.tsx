import { TableHeadWidth } from "../../../constants/table.constants";
import {
  ActionButtons,
  DeleteButton,
  EditButton,
  Wrapper,
  SaveButton
} from "./styles";
import { IRowOfUserProps } from "./models";
import { UserActionsModels } from "../../../store/actions/models";
import React from "react";
import { Input } from "../input";
import uniqId from 'uniqid';
import { getDataFromLS, setItemIntoLS } from "../../../utils/localStorage";

export const RowOfUser = ({ id, name, age, aboutPerson, action, updateUser, editUser, deleteUser }: IRowOfUserProps) => {
  const clickTypeCondition = (action.click === UserActionsModels.USER_EDIT && id === action.value.id) || localStorage.getItem('id') === id;

  const RenderUserData = () => {
    return clickTypeCondition
      ? (
        <>
          <Input key={uniqId()} defaultValue={action.value.id}  field={'id'} width={TableHeadWidth.ID} />
          <Input key={uniqId()} defaultValue={action.value.name}  field={'name'} width={TableHeadWidth.NAME} />
          <Input key={uniqId()} defaultValue={action.value.age}  field={'age'} width={TableHeadWidth.AGE} />
          <Input key={uniqId()} defaultValue={action.value.aboutPerson}  field={'aboutPerson'} width={TableHeadWidth.ABOUT_PERSON} />
        </>
        )
      : (
        <>
          <div style={{ width: TableHeadWidth.ID }}>{id}</div>
          <div style={{ width: TableHeadWidth.NAME }}>{name}</div>
          <div style={{ width: TableHeadWidth.AGE }}>{age}</div>
          <div style={{ width: TableHeadWidth.ABOUT_PERSON }}>{aboutPerson}</div>
        </>
      )
  }

  const RenderEditOrSaveButton = () => {
    return clickTypeCondition
      ? <SaveButton onClick={() => updateUser(getDataFromLS())}>Save</SaveButton>
      : <EditButton onClick={() => {
          editUser({ id, name, age, aboutPerson })
          setItemIntoLS(id, name, age, aboutPerson)
        }}>
          Edit
        </EditButton>
  }

  return (
    <Wrapper>
      <RenderUserData />
      <ActionButtons style={{ width: TableHeadWidth.ACTIONS }}>
        <DeleteButton onClick={() => deleteUser({ id, name, age, aboutPerson })}>Delete</DeleteButton>
        <RenderEditOrSaveButton />
      </ActionButtons>
    </Wrapper>
  )
}
