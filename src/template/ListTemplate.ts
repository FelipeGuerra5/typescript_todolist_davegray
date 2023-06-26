import FullList from "../model/FullList"

interface DOMList {
    ul: HTMLUListElement,
    clear(): void,
    render(fullList: FullList): void,
}

// Create a class, ListTemplate
// Must be singlenton
// Must implement the DOM 

export default class ListTemplate implements DOMList {
    static interface: ListTemplate = new ListTemplate()

    ul: HTMLUListElement

    private constructor() {
        this.ul = document.getElementById("listItems") as HTMLUListElement
    }

    clear(): void {
        this.ul.innerHTML = ''
    }

    render(fullList: FullList): void {
        this.clear()

        const counter = 1

        fullList.list.forEach(el => {
            const li: HTMLLIElement = document.createElement('li')
            li.innerHTML = `
                <li class="item">
                    <input type="checkbox" id=${el.id}>
                    <label for=${counter}>${el.item}</label>
                    <button class="button">${el.checked}</button>
                </li>
                `
            // Although the up solution is OK 
            // The best practice dictates it should be created each item for better handling
            this.ul!.appendChild(li)
        })


    }

}
