import React from "react";
import {
  ActionButtons,
  DeleteButton,
  EditButton,
  Wrapper,
  SaveButton,
  Item
} from "./styles";

import { IRowOfUserProps } from "./models";
import { Input } from "../input";
import { setItemIntoLS } from "../../../utils/localStorage";
import { columnsListWithWidth, TableHeadWidth } from "../../../constants/table.constants";
import { onSave } from "../../../utils/buttonsClick";
import { clickTypeCondition, disabledDeleteButton } from "../../../utils/conditions";
import uniqId from 'uniqid';

export const RowOfUser = ({ user, action, updateUser, editUser, deleteUser, getDefault }: IRowOfUserProps) => {
  const RenderUserData = () => {
    const UserEditRow = () => {
      return (
        <>
          {columnsListWithWidth.map(({field, width}) =>
            <Input key={uniqId()} defaultValue={action.value[field]} field={field} width={width}/>)}
        </>
      )
    }

    const UserViewRow = () => {
      return (
        <>
          {columnsListWithWidth.map(({ field, width}) =>
            <Item key={uniqId()} style={{ width }}>{user[field]}</Item>)}
        </>
      )
    }

    return clickTypeCondition(action, user) ? <UserEditRow /> : <UserViewRow />
  }

  const RenderEditOrSaveButton = () => {
    return clickTypeCondition(action, user)
      ? <SaveButton onClick={() => onSave(user, getDefault, updateUser)}>Save</SaveButton>
      : <EditButton
          onClick={() => {
            editUser(user)
            setItemIntoLS(user)}
          }
        >Edit</EditButton>
  };

  return (
    <Wrapper>
      <RenderUserData />
      <ActionButtons style={{ width: TableHeadWidth.ACTIONS }}>
        <DeleteButton
          onClick={() => deleteUser(user)}
          shouldDisable={disabledDeleteButton(action, user)}
          disabled={disabledDeleteButton(action, user)}
        >Delete</DeleteButton>
        <RenderEditOrSaveButton />
      </ActionButtons>
    </Wrapper>
  )
}
