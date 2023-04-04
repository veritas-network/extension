import { action, makeObservable, observable } from "mobx";
import { RootStore } from "./RootStore";

export enum Page {
  Search = 1,
  Auth = 2,
}

export class GeneralStore {
  private rootStore: RootStore;
  public page: Page;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.page = Page.Auth;
    makeObservable(this, {
      page: observable,
      setPage: action,
    });
  }

  setPage(page: Page) {
    this.page = page;
  }
}
