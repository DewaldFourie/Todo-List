import { createHtmlElement, setId } from "./dom";
import { currentProject } from "./project";


const $project = document.querySelector('#task-container');

class Task {
    constructor(name, date, priority){
        this.name = name;
        this.date = date;
        this.priority = priority;
        this.id = setId();
    }

    render() {
        const $div = createHtmlElement("div", this.id, ["task"], null);
        const $divTaskName = createHtmlElement("div", null, ["task-name-div"], null);
        const $checkbox = createHtmlElement("input", null, ["checkbox"], null);
        $checkbox.type = "checkbox";

        const $taskName = createHtmlElement("p", null, ["task-name"], this.name);

        const $divTaskInfo = createHtmlElement("div", null, ["task-info-div"], null);
        const $date = createHtmlElement("p", null, null, this.date);
        const $badge = createHtmlElement("div", null, ["badge"], this.priority);
        const $delete = createHtmlElement("img", null, ["delete-icon"], null);
        $delete.src = './assets/delete-dark.png';
        const $edit = createHtmlElement("img", null, ["edit-icon"], null);
        $edit.src = './assets/edit-task.png';
        $edit.addEventListener("click", () => {
            this.edit();
        });
        // Adding the checbox and name features to the NameDiv
        $divTaskName.appendChild($checkbox);
        $divTaskName.appendChild($taskName);
        // Adding the date, badge, delete and edit features to the infoDiv
        $divTaskInfo.appendChild($date);
        $divTaskInfo.appendChild($badge);
        $divTaskInfo.appendChild($edit);
        $divTaskInfo.appendChild($delete);
        // Adding the NameDiv and infoDiv to the div(TASK) with unique id.
        $div.appendChild($divTaskName);
        $div.appendChild($divTaskInfo);
        // Adding the task to the task-container div
        $project.appendChild($div);

        $checkbox.addEventListener("change", () => {
            $taskName.classList.toggle("done");
        });
        if (this.priority === "high"){
            $badge.textContent = $badge.textContent.charAt(0).toUpperCase() + $badge.textContent.slice(1);
            $badge.classList.add("high");
            $div.classList.add("high-div")
        }
        if (this.priority === "medium"){
            $badge.textContent = $badge.textContent.charAt(0).toUpperCase() + $badge.textContent.slice(1);
            $badge.classList.add("medium");
            $div.classList.add("medium-div")
        }
        if (this.priority === "low"){
            $badge.textContent = $badge.textContent.charAt(0).toUpperCase() + $badge.textContent.slice(1);
            $badge.classList.add("low");
            $div.classList.add("low-div")
        }
        $delete.addEventListener("click", () => {
            this.delete();
        });
    }

    delete() {
        currentProject.tasks = currentProject.tasks.filter((task) => task.id !== this.id);
        currentProject.renderTasks();
    }

    edit() {
        const $popUp = document.getElementById("popUp");
        $popUp.style.display = "flex";
        const $form = document.getElementById("form-edit");
        const $closeBtn = document.getElementById("close-edit");
        $closeBtn.addEventListener("click", () => {
            $form.reset();
            $popUp.style.display = "none";
        });
       
        $form.addEventListener("submit", (e) => {
            e.preventDefault();
            const $title = document.getElementById("task-name-edit");
            if ($title.value === "") {
                alert("The task must have a name.");
                return;
            }
            const $date = document.getElementById("task-date-edit");
            if ($date.value === "") {
                alert("Please choose a deadline");
                return;
            }
            const $priority = document.getElementById("task-priority-edit");

            this.name = $title.value;
            this.date = $date.value;
            this.priority = $priority.value;
            $popUp.style.display = "none";
            currentProject.renderTasks();
        });
    } 
}

export { Task }