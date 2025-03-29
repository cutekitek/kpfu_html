import TasksListBoardComponent from '../view/tasks-list-board-component.js';
import TasksListComponent from '../view/tasks-list-component.js';
import TaskComponent from '../view/task-component.js';
import TrashButtonComponent from '../view/trash-button-component.js';
import {render} from '../framework/render.js';
import { generateTask } from '../mock/task.js';

export default class TaskListPresenter {
  #container = null;
  #taskListBoardComponent = new TasksListBoardComponent();
  #tasks = Array.from({length: 12}, generateTask);

  constructor({container}) {
    this.#container = container;
  }

  init() {
    render(this.#taskListBoardComponent, this.#container);

    const taskTypes = ['backlog', 'progress', 'done', 'trash'];

    taskTypes.forEach((type) => {
      const taskList = new TasksListComponent(type);
      render(taskList, this.#taskListBoardComponent.getElement());
        this.#tasks.filter((task) => task.type === type).forEach((taskData) => {
          const task = new TaskComponent(taskData.task)
          render(task, taskList.getElement())
      })
      if(type === 'trash'){
        const trashButtonComponent = new TrashButtonComponent()
        render(trashButtonComponent, taskList.getElement())

        trashButtonComponent.setClickHandler(() => {
          alert('Удалить все задачи из корзины?')
        })
      }
    });
  }
}
