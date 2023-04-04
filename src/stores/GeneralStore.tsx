import { makeObservable, observable } from "mobx"

class GeneralStore {
    atSearch: boolean

    constructor() {
        makeObservable(this, {
            atSearch: observable,
        })
        this.atSearch = false;
    }

    SetAtSearch(atSearch: boolean) {
        this.atSearch = atSearch;
    }
}