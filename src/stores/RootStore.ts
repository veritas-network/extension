import { GeneralStore } from "./GeneralStore";

export class RootStore {
  private static singleton: RootStore;

  public generalStore: GeneralStore;

  constructor() {
    this.generalStore = new GeneralStore(this);
  }

  public static getSingleton(): RootStore {
    if (!RootStore.singleton) {
      RootStore.singleton = new RootStore();
    }
    return RootStore.singleton;
  }
}
