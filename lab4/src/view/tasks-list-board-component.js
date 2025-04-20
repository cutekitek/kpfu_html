import {createElement} from '../framework/render.js';

function createTaskBoardTemplate() {
  return (
    `<main class="task-board"></main>`
  );
}

export default class TasksListBoardComponent {
  getTemplate() {
    return createTaskBoardTemplate();
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
