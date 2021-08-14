var tasks = document.querySelector(".tasks");
var newTask = document.querySelector(".newtasks");
var addbtn = document.querySelector(".add");
var input = document.querySelector(".addInput");
var clearing = document.querySelector(".clearbtn");
var items = document.querySelector(".newtasks");
var messageBox = document.querySelector(".toast");
var accept = document.querySelector(".btn-yes");
var decline = document.querySelector(".btn-no");
var display = document.querySelector(".display");
var item_display = document.querySelector(".items-display");

// form validation
document.querySelector(".add").onclick = function () {
  if (document.querySelector(".addInput").value.length == 0) {
    alert("please Enter a task...");
  }
  // adding a task to the list when the user clicks th button
  else {
    document.querySelector(".newtasks").innerHTML += `
            
            <li class="task-list">${document.querySelector(".addInput").value}
            <button class="deletebtn btn btn-danger">Delete</button>
            <button class="completebtn btn btn-success">Complete</button>
            </li>
    `;
    document.querySelector(".display").innerHTML = `
    <h4> You have <span class="display-task">${items.children.length}</span> Tasks</h4>
    `;

    // clearing the input after the addition
    input.value = "";

    // deleting a task
    var deleting = document.querySelectorAll(".deletebtn");
    for (var i = 0; i < deleting.length; i++) {
      deleting[i].onclick = function () {
        this.parentElement.remove();
        display.innerHTML = `
    <h4> You have <span class="display-task">${items.children.length}</span> Tasks</h4>
    `;
      };
    }

    // toggling the done task
    var task = document.querySelectorAll(".task-list");
    for (var i = 0; i < task.length; i++) {
      task[i].onclick = function () {
        this.classList.toggle("addLine");
      };
    }
  }
};

// Clearing all the tasks
clearing.addEventListener("click", clear);
function clear() {
  var items = document.querySelector(".newtasks");
  messageBox.classList.toggle("show");
  accept.onclick = function () {
    items.innerHTML = "";
    display.innerHTML = "";
    item_display.innerHTML = "";
    messageBox.classList.remove("show");
  };
  decline.onclick = function () {
    messageBox.classList.remove("show");
  };

  // }
}

function completed() {
  
}
