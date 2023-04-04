import "./Extension.css";
import { Auth } from "./Auth";
import { Search } from "./Search";
import { ExtensionHeader } from "./ExtensionHeader";
import { ExtensionFooter } from "./ExtensionFooter";
import { observer } from "mobx-react-lite";

export const Extension = observer(() => {
  return (
    <div className="extension">
      <ExtensionHeader />
      {false ? <Search /> : <Auth />}
      <ExtensionFooter />
    </div>
  );
});
