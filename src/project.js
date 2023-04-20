import { createHtmlElement, setId } from "./dom";

const $project = document.querySelector("#projects .card");

class Project {
    constructor(title) {
        this.title = title;
        this.id = setId();
        this.tasks = [];
    }

    render() {
        const $div = createHtmlElement("div", this.id, ['project'], null);
        const $title = createHtmlElement("p", null, ['project-title'], this.title);
        const $delete = createHtmlElement("img", null, ['delete-icon'], null);
        $delete.src = './assets/delete-dark.png';
        $delete.addEventListener("click", () => {
            this.delete();
        });

        $div.appendChild($title);
        $div.appendChild($delete);

        $project.appendChild($div);
        $div.addEventListener("click", () => {
            currentProject = this;
            currentProject.active = false ;
            this.renderTasks();
            let projectClass = document.querySelectorAll(".project");
            projectClass.forEach((p) => (p.classList.value = "project"));
            let deleteBtns = document.querySelectorAll(".delete-icon");
            deleteBtns.forEach((btn) => (btn.src = './assets/delete-dark.png'));
            if (!$div.classList.value.includes("active")) {
                $div.classList.add("active");
                $delete.src = './assets/delete-light.png';
            } 
            else return;
        });
    }

    delete() {
        projectsArray = projectsArray.filter((project) => project.id !== this.id);
        Project.renderProjects();
    }

    renderTasks() {
        const $tasks = document.querySelector("#task-container");
        $tasks.innerHTML = ``;
        this.tasks.forEach((task) => task.render());
    }

    static renderProjects() {
        $project.innerHTML = "";
        projectsArray.forEach((project) => project.render());
    }

    static setCurrentProject(project){
        currentProject = project;
    }
}

let projectsArray = [new Project("Dashboard")];
let currentProject = projectsArray[0];

export { Project, projectsArray, currentProject };