import { BsSearch, BsPersonFill, BsXLg } from "react-icons/bs";
import "./Extension.css";
import { Auth } from "./Auth";
import { Search } from "./Search";
import { ExtensionHeader } from "./ExtensionHeader";
import { ExtensionFooter } from "./ExtensionFooter";

export const Extension = () => {
  return (
    <div className="extension">
      <ExtensionHeader />
      {false ? <Search /> : <Auth />}
      <ExtensionFooter />
    </div>
  );
};
