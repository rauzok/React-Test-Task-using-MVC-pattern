import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  width: 100%;

  display: flex;
  column-gap: 5px;

  text-align: left;
  
  border-bottom: 1px solid rgba(0,0,0,.06);

  button {
    height: 30px;

    padding: 0 7%;
  }
`

export const ActionButtons = styled.div`
  display: flex;
  justify-content: space-around;
`

export const DeleteButton = styled.button`
  color: #d4380d;
  background: #fff2e8;
  border: 1px solid #ffbb96;

  cursor: pointer;
`

export const SaveButton = styled.button`
  color: #389e0d;
  background: #f6ffed;
  border: 1px solid #b7eb8f;

  cursor: pointer;
`

export const EditButton = styled.button`
  color: #0d409e;
  background: #f6ffed;
  border: 1px solid #8f94eb;

  cursor: pointer;
`
