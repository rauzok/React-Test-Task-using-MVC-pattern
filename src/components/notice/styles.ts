import styled from "styled-components";

export const SuccessNotice = styled.div`
  position: fixed;
  top: 3%;
  right: 3%;

  padding: 25px;

  display: ${({ display }: { display: string }) => display};

  color: #389e0d;
  background: #f6ffed;
  border: 1px solid #b7eb8f;
`

export const ErrorNotice = styled.div`
  position: fixed;
  top: 3%;
  right: 3%;

  padding: 25px;

  display: ${({ display }: { display: string }) => display};

  color: #d4380d;
  background: #fff2e8;
  border: 1px solid #ffbb96;
`