export { createInventory };
import { removeChildNodes, createButtons } from './index.js';

const createInventory = () => {
    const mainDiv = document.querySelector("#content")
    removeChildNodes(mainDiv)
    mainDiv.append(createHeader())
    mainDiv.append(createButtons("Inventory"))
    mainDiv.append(createBody())

    mainDiv.append(createFooter())
}

function createHeader() {
    const header = document.createElement('div')
    header.textContent = 'Currently In Stock:'
    return header;
}

function createBody() {
    const body = document.createElement('div')
    body.textContent = 'Pictures of stock with prices and description.'
}

function createFooter() {
    const footer = document.createElement('div')
    footer.textContent = "This is a footer."
    return footer;
}