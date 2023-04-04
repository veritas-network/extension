import { BsSearch, BsPersonFill } from "react-icons/bs";
import "./ExtensionFooter.css";

export const ExtensionFooter = () => {
  return (
    <div className={"extension-footer"}>
      <div className={"extension-footer-part"}>
        <BsSearch size={20} />
      </div>
      <div className={"extension-footer-part"}>
        <BsPersonFill size={25} />
      </div>
    </div>
  );
};
