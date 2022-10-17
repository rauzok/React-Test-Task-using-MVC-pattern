import { useDispatch, useSelector } from "react-redux";
import { getMessage } from "../../store/selectors";
import { SuccessNotice, ErrorNotice } from "./styles";
import { useEffect, useState } from "react";
import { EMessages } from "../../store/reducers/reducerMessage/models";

export const Notice = () => {
  const [display, setDisplay] = useState<string>('block');
  const message = useSelector(getMessage);
  const dispatch = useDispatch();

  const closeNotice = () => setTimeout(() => {
    dispatch({ type: EMessages.REMOVE });
    setDisplay('none');
  }, 5000);

  useEffect(() => {
    closeNotice();
  }, []);

  const RenderNotice = () => {
    return message.type === EMessages.SUCCESS
      ? <SuccessNotice display={display}>{message.value}</SuccessNotice>
      : <ErrorNotice display={display}>{message.value}</ErrorNotice>
  }

  return <RenderNotice />;
}
