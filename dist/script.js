function domLoaded() {

    document.querySelector("#add-btn")
        .addEventListener("click", addBtnClick);

    document.querySelector("#task-textbox")
        .addEventListener("keyup", function(event) {
            if (event.key === "Enter") {
                addBtnClick();
            }
        });

    let buttons = document.querySelectorAll(".done-btn");

    for (let button of buttons) {
        button.addEventListener("click", removeTask);
    }

}

function addBtnClick() {

    let textbox = document.querySelector("#task-textbox");

    let task = textbox.value;

    if (task.trim() !== "") {
        addTask(task);
    }

    textbox.value = "";

    textbox.focus();

}

function addTask(task) {

    let li = document.createElement("li");

    li.innerHTML = '<span class="task-text">' + task + '</span><button class="done-btn">×</button>';

    let ol = document.querySelector("ol");

    ol.appendChild(li);

    let buttons = document.querySelectorAll(".done-btn");

    buttons[buttons.length - 1]
        .addEventListener("click", removeTask);

}

function removeTask(event) {

    let li = event.target.parentNode;

    let ol = li.parentNode;

    ol.removeChild(li);

}

document.addEventListener("DOMContentLoaded", domLoaded);