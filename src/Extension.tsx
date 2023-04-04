import "./Extension.css";
import { Auth } from "./Auth";
import { Search } from "./Search";
import { ExtensionHeader } from "./ExtensionHeader";
import { ExtensionFooter } from "./ExtensionFooter";
import { observer } from "mobx-react-lite";
import { RootStore } from "./stores/RootStore";

export const Extension = observer(() => {
  return (
    <div className="extension">
      <ExtensionHeader />
      {RootStore.getSingleton().generalStore.atSearch ? <Search /> : <Auth />}
      <ExtensionFooter />
    </div>
  );
});
