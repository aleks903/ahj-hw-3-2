/* eslint-disable class-methods-use-this */
import ArrData from './ArrData.js';
import DisplayForm from './DisplayForm.js';

const arrData = new ArrData();
const displayForm = new DisplayForm();

class WorkTasks {
  constructor() {
    this.divPined = document.getElementById('pined');
    this.divAllTasks = document.getElementById('all-tasks');
    this.formInput = document.getElementById('input-form');
    this.elementInput = document.getElementById('input-task');
  }

  init() {
    arrData.addTask('testovoe1');
    arrData.addTask('testovoe2');
    arrData.addTask('testovoe3');
    arrData.addTask('testovoe4');
    arrData.addTask('testovoe5');
    arrData.tasks[2].pined = true;
    arrData.tasks[4].pined = true;

    displayForm.redrawTasks(arrData.tasks);

    this.eventsTasks();
  }

  eventsTasks() {
    this.formInput.addEventListener('submit', (event) => {
      event.preventDefault();
      arrData.addTask(this.elementInput.value);
      this.filterTask(this.elementInput.value);
      this.elementInput.value = '';
    });

    this.elementInput.addEventListener('input', () => {
      this.filterTask(this.elementInput.value);
    });

    this.divPined.addEventListener('click', (event) => {
      if (event.target.className === 'checked') {
        const lementId = event.target.closest('.item-task').dataset.id;
        this.moveTask(lementId, false);
      }
    });

    this.divAllTasks.addEventListener('click', (event) => {
      if (event.target.className === 'checked') {
        const elmentId = event.target.closest('.item-task').dataset.id;
        this.moveTask(elmentId, true);
      }
    });
  }

  filterTask(value) {
    const filtrArr = arrData.tasks.filter((item) => {
      const valueLowerCase = value.trim().toLowerCase();
      const trueName = item.name.toLowerCase().includes(valueLowerCase);
      return trueName || item.pined;
    });
    displayForm.redrawTasks(filtrArr);
  }

  moveTask(itemIdTask, pined) {
    const idTask = arrData.tasks.findIndex((item) => item.id === Number(itemIdTask));
    arrData.tasks[idTask].pined = pined;
    this.filterTask(this.elementInput.value);
  }
}

const workTasks = new WorkTasks();
workTasks.init();
