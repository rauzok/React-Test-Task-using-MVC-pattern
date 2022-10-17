import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import uniqId from 'uniqid';

import {
  addUser,
  deleteUser,
  editUser,
  loadUsers,
  updateUser
} from "../../store/actions";
import { IStoreState, ITableViewProps } from "./models";
import { IUserData } from "../../store/models";
import { Table, Wrapper, AddNewUserButton, TableWrapper } from "./styles";

import { Columns } from "./columns";
import { RowOfUser } from "./rowOfUser";
import { Loader } from "../loader";
import { Notice } from "../notice";

const TableView = (props: ITableViewProps) => {
  const RenderTableComponent = () => props.users.length > 0 ? <RenderTable /> : <Loader />;

  useEffect(() => {
    props.loadUsers()
  }, [])

  const RenderListOfUsers = () => {
    return (
      <>
        {
          props.users.map(({ id, name, age, aboutPerson }: IUserData) =>
            <RowOfUser
              key={uniqId()}
              id={id}
              name={name}
              age={age}
              aboutPerson={aboutPerson}
              deleteUser={props.deleteUser}
              updateUser={props.updateUser}
              editUser={props.editUser}
              action={props.action}
            />
          )
        }
      </>
    )
  }

  const RenderTable = () => {
    return (
      <Wrapper>
        <AddNewUserButton onClick={() => props.addUser()}>Add new user</AddNewUserButton>
        <Table>
          <Columns />
          <RenderListOfUsers />
        </Table>
      </Wrapper>
    )
  }

  return (
    <TableWrapper>
      {props.message.value && (<Notice/>)}
      <RenderTableComponent />
    </TableWrapper>
  );
}

const mapStateToProps = (state: IStoreState) =>
  ({ users: state.users, message: state.message, action: state.action });

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ loadUsers, addUser, deleteUser, editUser, updateUser },
  dispatch);

export const TableController = connect(mapStateToProps, mapDispatchToProps)(TableView);
