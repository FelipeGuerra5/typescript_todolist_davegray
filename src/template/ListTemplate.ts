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

        fullList.list.forEach(item => {
            // Create the li element
            const li: HTMLLIElement = document.createElement('li')
            li.className = item.item

            // Create the input Element
            const check: HTMLInputElement = document.createElement('input')
            check.type = "checkbox"
            check.id = item.id
            check.tabIndex = 0
            check.checked = item.checked
            li.append(check)

            check.addEventListener('change', () => {
                item.checked = !item.checked
                fullList.save()
            })

            // Create the Label element
            const label: HTMLLabelElement = document.createElement("label")
            label.htmlFor = item.id
            label.textContent = item.item
            li.append(label)

            // Create the button element
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
