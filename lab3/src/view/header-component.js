import {createElement} from '../framework/render.js'; 


function createAddTaskComponentTemplate() {
    return (
        `<header class="header">
            <h1 class="header__title">Список задач</h1>
        </header>`
      );
}


export default class AddTaskComponent {
  getTemplate() {
    return createAddTaskComponentTemplate();
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
