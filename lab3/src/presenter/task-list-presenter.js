import TasksListBoardComponent from '../view/tasks-list-board-component.js';
import TasksListComponent from '../view/tasks-list-component.js';
import TaskComponent from '../view/task-component.js';
import TrashButtonComponent from '../view/trash-button-component.js';
import {render} from '../framework/render.js';

export default class TaskListPresenter {
  #container = null;
  #taskListBoardComponent = new TasksListBoardComponent();
  #tasksModel = null;

  constructor({container, tasksModel}) {
    this.#container = container;
    this.#tasksModel = tasksModel;
  }

  init() {
    render(this.#taskListBoardComponent, this.#container);
    const tasks = this.#tasksModel.getTasks();
    const taskTypes = ['backlog', 'progress', 'done', 'trash'];

    taskTypes.forEach((type) => {
      const taskList = new TasksListComponent(type);
      render(taskList, this.#taskListBoardComponent.getElement());
      tasks.filter((task) => task.type === type).forEach((taskData) => {
        this.#renderTask(taskData.task, taskList.getElement())
      })
      if(type === 'trash'){
        const trashButtonComponent = new TrashButtonComponent()
        render(trashButtonComponent, taskList.getElement())
      }
    });
  }

  #renderTask(task, container) {
    render(new TaskComponent(task), container);
  }
}
