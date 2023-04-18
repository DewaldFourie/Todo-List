import { Project, projectsArray, currentProject } from "./project";
import { Task } from "./task";

const $projectForm = document.getElementById("form-project");

$projectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const $title = document.getElementById("project-name");
    if ($title.value === ""){
        alert("The Project must have a name.");
        return;
    }
    const project = new Project($title.value);
    projectsArray.push(project);
    $title.value = "";
    Project.renderProjects();
    Project.setCurrentProject(project);
    let projects = document.querySelectorAll(".project");
    projects[projects.length - 1].classList.add("active");
    projects[projects.length - 1].lastChild.src = "";
});

const $taskForm = document.getElementById("form-task");

$taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const $title = document.getElementById("task-name");
    if ($title.value === "") {
        alert("The Task must have a name.");
        return;
    }
    const $date = document.getElementById("task-date");
    if ($date.value === "") {
        alert("Please choose a deadline");
        return;
    }
    const $priority = document.getElementById("task-priority");

    const task = new Task($title.value, $date.value, $priority.value);
    currentProject.tasks.push(task)
    task.render();
});

Project.renderProjects();
const user = prompt('Enter your Name:');
document.querySelector(".user-name").innerText = user || "User";