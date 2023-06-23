import FullList from "../model/FullList"

interface DOMList {
    ul: HTMLUListElement,
    clear: void,
    render(fullList: FullList): void,
}

// Create a class,
// Must be singlenton
// Must implement the DOM
