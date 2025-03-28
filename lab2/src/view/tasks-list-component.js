import {createElement} from '../framework/render.js';

export default class TasksListComponent {
    getTemplate() {  
        return `
            <section class="task-column">
            <h2 class="task-column__title task-card--backlog">Название</h2>
            </section>
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