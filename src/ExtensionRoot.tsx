import "./ExtensionRoot.css";
import { ExtensionBodyAuth } from "./ExtensionBodyAuth";
import { ExtensionBodySearch } from "./ExtensionBodySearch";
import { ExtensionHeader } from "./ExtensionHeader";
import { ExtensionFooter } from "./ExtensionFooter";
import { observer } from "mobx-react-lite";
import { RootStore } from "./stores/RootStore";
import { Page } from "./stores/GeneralStore";

export const ExtensionRoot = observer(() => {
  return (
    <div className="extension">
      <ExtensionHeader />
      {RootStore.getSingleton().generalStore.page == Page.Search ? (
        <ExtensionBodySearch />
      ) : null}
      {RootStore.getSingleton().generalStore.page == Page.Auth ? (
        <ExtensionBodyAuth />
      ) : null}
      <ExtensionFooter />
    </div>
  );
});
