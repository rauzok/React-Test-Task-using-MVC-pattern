import { LoaderWrapper } from "./styles";

const loadingGif = require("../../loadingGif.gif");

export const Loader = () => {
  return (
    <LoaderWrapper>
      <img
        height={150}
        width={150}
        src={loadingGif}
        alt="loading..."
      />
    </LoaderWrapper>
  )
}
