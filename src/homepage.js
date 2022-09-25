import Sample from './images/homepage/mimic-chest.svg';
import { removeChildNodes, createButtons } from './index.js';
export { createHomepage };

const createHomepage = () => {
    const mainDiv = document.querySelector("#content")
    removeChildNodes(mainDiv)
    mainDiv.append(createHeader())
    mainDiv.append(createButtons("Home"))
    mainDiv.append(createBody())
    mainDiv.append(createFooter())
}

function createHeader() {
    const header = document.createElement('div')
    header.textContent = "Welcome to your One Stop Potion Shop!"
    return header;
}

function createBody() {
    const icon = document.createElement("img")
    icon.src = Sample;
    return icon;
}

function createFooter() {
    const footer = document.createElement('div')
    footer.textContent = "This is a footer."
    return footer;
}