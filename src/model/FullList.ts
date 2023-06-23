import ListItem from "./listItem";

interface List {
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(itemObj: ListItem): void,
    removeItem(id: string): void,
}

export default class FullList implements List {

    static instance: FullList = new FullList()
    private constructor(private _list: FullList[] = []) { }

    get list(): ListItem[] {
        return this.list
    }

    load(): void {

    }

    save(): void {
        localStorage.setItem("myList", JSON.stringify(this._list))
    }

    clearlist(): void {
        this._list = []
        this.save()
    }

    addItem(): void {

    }

    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !== id)
        this.save()
    }

}