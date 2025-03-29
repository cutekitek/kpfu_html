import HeaderComponent from './view/header-component.js';
import AddTaskComponent from './view/add-task-component.js';
import {render, RenderPosition} from './framework/render.js';
import TaskListPresenter from './presenter/task-list-presenter.js';

const bodyContainer = document.querySelector('.board-app')
const mainContainer = document.querySelector('.app__main')

render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN)
render(new AddTaskComponent(), mainContainer)

const taskListPresenter = new TaskListPresenter({container: mainContainer});
taskListPresenter.init();
