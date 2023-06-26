import FullList from "../model/FullList"

interface DOMList {
    ul: HTMLUListElement,
    clear(): void,
    render(fullList: FullList): void,
}

export default class ListTemplate implements DOMList {
    static instance: ListTemplate = new ListTemplate()

    ul: HTMLUListElement

    constructor() {
        this.ul = document.getElementById("listItems") as HTMLUListElement
    }

    clear(): void {
        this.ul.innerHTML = ""
    }

    render(fullList: FullList): void {
        this.clear()

        fullList.list.forEach(item => {

            // LI item
            const li: HTMLLIElement = document.createElement("li")
            li.className = item.id

            // Input
            const check: HTMLInputElement = document.createElement("input")
            check.type = "checkbox"
            check.id = item.id
            check.tabIndex = 0
            check.checked = item.checked
            li.append(check)

            check.addEventListener("check", () => {
                item.checked = !item.checked
                fullList.save()
            })

            // Label
            const label: HTMLLabelElement = document.createElement("label")
            label.htmlFor = item.id
            label.textContent = item.item
            li.append(label)

            // Button
            const button: HTMLButtonElement = document.createElement("button")
            button.textContent = "X"
            button.id = item.id

            button.addEventListener("click", () => {
                fullList.removeItem(item.id)
            })
            li.append(button)

            this.ul.append(li)
        })
    }
}

