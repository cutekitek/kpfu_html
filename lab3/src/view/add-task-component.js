import {createElement} from '../framework/render.js'; 


function createHeaderComponentTemplate() {
    return (
        `<section class="new-task">
    <h3>Новая задача</h3>
    <form>
    <input
      type="text"
      class="new-task__input"
      placeholder="Название задачи..."
    />
    <button class="new-task__button">
      <svg
        class="new-task__icon"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 1V13M1 7H13"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
      Добавить
    </button>
    </form>
  </section>`
      );
}


export default class HeaderComponent {
  getTemplate() {
    return createHeaderComponentTemplate();
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
