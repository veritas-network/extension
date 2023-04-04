import { BsSearch, BsPersonFill, BsTwitter, BsBarChartFill, BsBank, BsBank2, BsUiRadios } from "react-icons/bs";
import "./ExtensionFooter.css";
import { observer } from "mobx-react-lite";
import { RootStore } from "./stores/RootStore";
import { Page } from "./stores/GeneralStore";

export const ExtensionFooter = observer(() => {
  return (
    <div className={"extension-footer"}>
      <div
        className={`extension-footer-part ${
          RootStore.getSingleton().generalStore.page == Page.Tweet
            ? "extension-footer-part-active"
            : null
        }`}
        onClick={() => RootStore.getSingleton().generalStore.setPage(Page.Tweet)}
      >
        <BsUiRadios size={20} />
      </div>
      <div
        className={`extension-footer-part ${
          RootStore.getSingleton().generalStore.page == Page.Search
            ? "extension-footer-part-active"
            : null
        }`}
        onClick={() => RootStore.getSingleton().generalStore.setPage(Page.Search)}
      >
        <BsSearch size={20} />
      </div>
      <div
        className={`extension-footer-part ${
          RootStore.getSingleton().generalStore.page == Page.Auth
            ? "extension-footer-part-active"
            : null
        }`}
        onClick={() => RootStore.getSingleton().generalStore.setPage(Page.Auth)}
      >
        <BsPersonFill size={25} />
      </div>
    </div>
  );
});
