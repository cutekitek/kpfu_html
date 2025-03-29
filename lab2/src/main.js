import HeaderComponent from './view/header-component.js';
import AddTaskComponent from './view/add-task-component.js';
import TasksListBoardComponent from './view/tasks-list-board-component.js';
import TasksListComponent from './view/tasks-list-component.js';
import {render, RenderPosition} from './framework/render.js';
import TaskComponent from './view/task-component.js';

const bodyContainer = document.querySelector('.board-app')
const mainContainer = document.querySelector('.app__main')

render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN)
render(new AddTaskComponent(), mainContainer)
const taskListBoard = new TasksListBoardComponent()
render(taskListBoard, mainContainer)
for(let i = 0; i<4; i++){
    let taskList = new TasksListComponent()
    render(taskList, taskListBoard.getElement())
    for (let c = 0; c < 4; c++) {
        let task = new TaskComponent("test")
        render(task, taskList.getElement())
    }
}