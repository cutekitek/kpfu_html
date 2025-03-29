import {createElement} from '../framework/render.js';

const StatusLabels = {
    backlog: "Беклог",
    progress: "В процессе",
    done: "Сделано",
    trash: "Мусорка"
}

export default class TasksListComponent {
    constructor (listType) {
        this.listType = listType
    }
    
    getTemplate() {  
        return `
            <section class="task-column">
            <h2 class="task-column__title task-card--${this.listType}">${StatusLabels[this.listType]}</h2>
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