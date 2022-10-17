import React from "react";

import { InputStyled } from "./styles";
import { IInputProps } from "./models";

const onChangeInput = (event: React.FormEvent<HTMLInputElement>, field: string) =>
  localStorage.setItem(field, event.currentTarget.value);

export const Input = ({ width, field, defaultValue }: IInputProps) => {
  return (
    <InputStyled
      type={"text"}
      defaultValue={defaultValue}
      style={{ width }}
      onChange={event => onChangeInput(event, field)}
    />
  )
}