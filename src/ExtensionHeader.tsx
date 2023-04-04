import { BsXLg } from "react-icons/bs";
import "./ExtensionHeader.css";

export const ExtensionHeader = () => {
  return (
    <div className={"extension-header"}>
      <img className={"extension-header-logo"} src={"./logo128.png"} />
      <BsXLg className={"extension-header-close"} size={22} />
    </div>
  );
};
