import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  width: 100%;

  display: flex;
  column-gap: 5px;
  align-items: center;

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

  @media (max-width: 950px) {
    flex-direction: column;
    row-gap: 5px;
    justify-content: normal;
  }
`

export const DeleteButton = styled.button`
  color: ${({ shouldDisable }: { shouldDisable: boolean }) => shouldDisable ? '#ffffff' : '#d4380d'};
  background-color: ${({ shouldDisable }: { shouldDisable: boolean }) => shouldDisable ? '#b2b2b2' : '#fff2e8'};
  border: ${({ shouldDisable }: { shouldDisable: boolean }) => shouldDisable ? '1px solid #262626' : '1px solid #ffbb96'};

  cursor: pointer;

  @media (max-width: 950px) {
    width: 100%;
  }
`

export const SaveButton = styled.button`
  color: #389e0d;
  background: #f6ffed;
  border: 1px solid #b7eb8f;

  cursor: pointer;

  @media (max-width: 950px) {
    width: 100%;
  }
`

export const EditButton = styled.button`
  color: #0d409e;
  background: #f6ffed;
  border: 1px solid #8f94eb;

  cursor: pointer;

  @media (max-width: 950px) {
    width: 100%;
  }
`

export const Item = styled.div`
  overflow: scroll;
  word-wrap: break-word;

  ::-webkit-scrollbar {
    display: none;
  }
`
