let tasks = document.querySelector(".tasks");
let newTask = document.querySelector(".newtasks");
let addbtn = document.querySelector(".add");
let input = document.querySelector(".addInput");
let clearing = document.querySelector(".clearbtn");
let items = document.querySelector(".newtasks");
let messageBox = document.querySelector(".toast");
let accept = document.querySelector(".btn-yes");
let decline = document.querySelector(".btn-no");
let display = document.querySelector(".display");
let item_display = document.querySelector(".items-display");
let lining = document.querySelectorAll("addLine");
let filtering = document.querySelector(".filter");

function validate(input) {
  if (input.value.length == 0) {
    alert("Enter a task to do....");
    return false;
  } else {
    return true;
  }
}

function addTask(input, items) {
  items.innerHTML += `
        <li class="task-list"> ${input.value}
        <button class="deletebtn btn btn-danger"> Delete </button>
        </li> 
    `;
  input.value = "";
}

function deletion() {
  let delbtn = document.querySelectorAll(".deletebtn");
  for (let i = 0; i < delbtn.length; i++) {
    delbtn[i].onclick = function () {
      this.parentElement.remove();
      count_tasks(display, items);
    };
  }
}

function count_tasks(display, items) {
  display.innerHTML = `
  <h4> You have <span class="items-display">${items.children.length} Tasks todo </span></h4>
  `;
}

function clear(items, display) {
  items.innerHTML = "";
  display.innerHTML = "";
  input.value = "";
  filtering.innerHTML = "";
}

function toggle() {
  let task = document.querySelectorAll(".task-list");
  for (let i = 0; i < task.length; i++) {
    task[i].onclick = function () {
      this.classList.toggle("addLine");
      filter();
    };
  }
}

function filter() {
  let toggled = document.querySelectorAll(".addLine");
  let filtering = document.querySelector(".filter");
  for (let i = 0; i < toggled.length; i++) {
     completed_task(filtering,toggled, items);
  }
}

function completed_task(filtering,toggled, items){
    filtering.innerHTML = `
    <h4> You completed <span class="filter-status">${toggled.length} Task</span> And there is <span class= "filter-status"> ${items.children.length - toggled.length } tasks </span>remained todo</h4>
`;
}

addbtn.addEventListener("click", function () {
  if (validate(input)) {
    addTask(input, items);
  }
  deletion();
  toggle();
  count_tasks(display, items);
});

clearing.addEventListener("click", function () {
  clear(items, display);
});
