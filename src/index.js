import './style.css';
import { createHomepage } from './homepage.js';
import { createDisclaimer } from './disclaimer.js';
import { createInventory } from './inventory.js';
export { removeChildNodes, tabSwitch, createButtons };

createHomepage();


function removeChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
  }

function tabSwitch() {
    if (this.className != 'active') {
    this.textContent == 'Home'       ? createHomepage()   :
    this.textContent == 'Disclaimer' ? createDisclaimer() :
    this.textContent == 'Inventory'  ? createInventory()  :
    console.log('Well, something broke here.');
    }
}

function createButtons(tabName) {
    const wrapper = document.createElement('div')
    const names = ['Home', 'Inventory', 'Disclaimer']
    names.forEach(item => {
        const button = document.createElement('button');
        item == tabName ? button.className = 'active' : 'inactive';
        button.textContent = item;
        button.addEventListener('click', tabSwitch, false);
        wrapper.append(button);
    })
    return wrapper;
}