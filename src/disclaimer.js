export { createDisclaimer };
import { removeChildNodes, createButtons } from './index.js';

const createDisclaimer = () => {
    const mainDiv = document.querySelector("#content")
    removeChildNodes(mainDiv)
    mainDiv.append(createHeader())
    mainDiv.append(createButtons("Disclaimer"))
    mainDiv.append(createBody())
    mainDiv.append(createFooter())
}

function createHeader() {
    const header = document.createElement('div')
    header.textContent = 'Things We Are Not Responsible For:'
    return header;
}

function createBody() {
    const body = document.createElement('div')
    body.textContent = 'Are you ready for a big rant? Because this is going to be a big rant.'
    return body;
}

function createFooter() {
    const footer = document.createElement('div')
    footer.textContent = "This is a footer."
    return footer;
}