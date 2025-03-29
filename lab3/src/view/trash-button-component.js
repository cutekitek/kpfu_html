import {createElement} from '../framework/render.js';

function createTrashButtonTemplate() {
  return '<button class="clear-button">Удалить все</button>';
}

export default class TrashButtonComponent {
  getTemplate() {
    return createTrashButtonTemplate();
  }

  getElement() {
    if (!this.element) {
        this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
