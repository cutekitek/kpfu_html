import {createElement} from '../framework/render.js';

export default class TaskComponent {
  constructor(task) {
    this.task = task;
  }

  getTemplate() {
    return `
      <div class="task-card">
        <span class="task-card--backlog task-card__color-band"></span>
        ${this.task}
      </div>
    `;
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