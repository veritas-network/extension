import { makeObservable, observable } from "mobx";
import { RootStore } from "./RootStore";

export class GeneralStore {
  private rootStore: RootStore;
  public atSearch: boolean;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.atSearch = false;
    makeObservable(this, {
      atSearch: observable,
    });
  }

  SetAtSearch(atSearch: boolean) {
    this.atSearch = atSearch;
  }
}
