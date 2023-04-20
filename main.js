/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHtmlElement\": () => (/* binding */ createHtmlElement),\n/* harmony export */   \"setId\": () => (/* binding */ setId)\n/* harmony export */ });\n\n// Module contains functions to create a new dom element(new task entry element on page)\n// and to set the ID of that element with a random number\n// (NOTE: if lots of enties, duplicats may occur)\n\nfunction createHtmlElement(type, id, arrayClasses, content){\n    const element = document.createElement(type);\n    if (id) element.id = id;\n    if (arrayClasses){\n        arrayClasses.forEach((myclass) => element.classList.add(myclass));\n    }\n    if (content) element.innerText = content;\n\n    return element;\n}\n\nfunction setId() {\n    return Math.random().toString().split(\".\").join(\"\");\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\n\nconst $projectForm = document.getElementById(\"form-project\");\n\n$projectForm.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    const $title = document.getElementById(\"project-name\");\n    if ($title.value === \"\"){\n        alert(\"The Project must have a name.\");\n        return;\n    }\n    const project = new _project__WEBPACK_IMPORTED_MODULE_0__.Project($title.value);\n    _project__WEBPACK_IMPORTED_MODULE_0__.projectsArray.push(project);\n    $title.value = \"\";\n    _project__WEBPACK_IMPORTED_MODULE_0__.Project.renderProjects();\n    _project__WEBPACK_IMPORTED_MODULE_0__.Project.setCurrentProject(project);\n    let projects = document.querySelectorAll(\".project\");\n    projects[projects.length - 1].classList.add(\"active\");\n    projects[projects.length - 1].lastChild.src = './assets/delete-light.png';\n    $projectForm.reset()\n});\n\nconst $taskForm = document.getElementById(\"form-task\");\n\n$taskForm.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    const $title = document.getElementById(\"task-name\");\n    if ($title.value === \"\") {\n        alert(\"The Task must have a name.\");\n        return;\n    }\n    const $date = document.getElementById(\"task-date\");\n    if ($date.value === \"\") {\n        alert(\"Please choose a deadline\");\n        return;\n    }\n    const $priority = document.getElementById(\"task-priority\");\n\n    const task = new _task__WEBPACK_IMPORTED_MODULE_1__.Task($title.value, $date.value, $priority.value);\n    _project__WEBPACK_IMPORTED_MODULE_0__.currentProject.tasks.push(task)\n    task.render();\n    $taskForm.reset();\n});\n\nconst $settings = document.querySelector('.settings');\n$settings.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n    alert(\"Add a settings module if needed.\")\n})\n\n_project__WEBPACK_IMPORTED_MODULE_0__.Project.renderProjects();\nconst user = prompt('Enter your Name:');\ndocument.querySelector(\".user-name\").innerText = user || \"User\";\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"currentProject\": () => (/* binding */ currentProject),\n/* harmony export */   \"projectsArray\": () => (/* binding */ projectsArray)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\nconst $project = document.querySelector(\"#projects .card\");\n\nclass Project {\n    constructor(title) {\n        this.title = title;\n        this.id = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.setId)();\n        this.tasks = [];\n    }\n\n    render() {\n        const $div = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"div\", this.id, ['project'], null);\n        const $title = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"p\", null, ['project-title'], this.title);\n        const $delete = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"img\", null, ['delete-icon'], null);\n        $delete.src = './assets/delete-dark.png';\n        $delete.addEventListener(\"click\", () => {\n            this.delete();\n        });\n\n        $div.appendChild($title);\n        $div.appendChild($delete);\n\n        $project.appendChild($div);\n        $div.addEventListener(\"click\", () => {\n            currentProject = this;\n            currentProject.active = false ;\n            this.renderTasks();\n            let projectClass = document.querySelectorAll(\".project\");\n            projectClass.forEach((p) => (p.classList.value = \"project\"));\n            let deleteBtns = document.querySelectorAll(\".delete-icon\");\n            deleteBtns.forEach((btn) => (btn.src = './assets/delete-dark.png'));\n            if (!$div.classList.value.includes(\"active\")) {\n                $div.classList.add(\"active\");\n                $delete.src = './assets/delete-light.png';\n            } \n            else return;\n        });\n    }\n\n    delete() {\n        projectsArray = projectsArray.filter((project) => project.id !== this.id);\n        Project.renderProjects();\n    }\n\n    renderTasks() {\n        const $tasks = document.querySelector(\"#task-container\");\n        $tasks.innerHTML = ``;\n        this.tasks.forEach((task) => task.render());\n    }\n\n    static renderProjects() {\n        $project.innerHTML = \"\";\n        projectsArray.forEach((project) => project.render());\n    }\n\n    static setCurrentProject(project){\n        currentProject = project;\n    }\n}\n\nlet projectsArray = [new Project(\"Dashboard\")];\nlet currentProject = projectsArray[0];\n\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\n\nconst $project = document.querySelector('#task-container');\n\nclass Task {\n    constructor(name, date, priority){\n        this.name = name;\n        this.date = date;\n        this.priority = priority;\n        this.id = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.setId)();\n    }\n\n    render() {\n        const $div = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"div\", this.id, [\"task\"], null);\n        const $divTaskName = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"div\", null, [\"task-name-div\"], null);\n        const $checkbox = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"input\", null, [\"checkbox\"], null);\n        $checkbox.type = \"checkbox\";\n\n        const $taskName = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"p\", null, [\"task-name\"], this.name);\n\n        const $divTaskInfo = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"div\", null, [\"task-info-div\"], null);\n        const $date = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"p\", null, null, this.date);\n        const $badge = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"div\", null, [\"badge\"], this.priority);\n        const $delete = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"img\", null, [\"delete-icon\"], null);\n        $delete.src = './assets/delete-dark.png';\n        const $edit = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"img\", null, [\"edit-icon\"], null);\n        $edit.src = './assets/edit-task.png';\n        $edit.addEventListener(\"click\", () => {\n            this.edit();\n        });\n        // Adding the checbox and name features to the NameDiv\n        $divTaskName.appendChild($checkbox);\n        $divTaskName.appendChild($taskName);\n        // Adding the date, badge, delete and edit features to the infoDiv\n        $divTaskInfo.appendChild($date);\n        $divTaskInfo.appendChild($badge);\n        $divTaskInfo.appendChild($edit);\n        $divTaskInfo.appendChild($delete);\n        // Adding the NameDiv and infoDiv to the div(TASK) with unique id.\n        $div.appendChild($divTaskName);\n        $div.appendChild($divTaskInfo);\n        // Adding the task to the task-container div\n        $project.appendChild($div);\n\n        $checkbox.addEventListener(\"change\", () => {\n            $taskName.classList.toggle(\"done\");\n        });\n        if (this.priority === \"high\"){\n            $badge.textContent = $badge.textContent.charAt(0).toUpperCase() + $badge.textContent.slice(1);\n            $badge.classList.add(\"high\");\n            $div.classList.add(\"high-div\")\n        }\n        if (this.priority === \"medium\"){\n            $badge.textContent = $badge.textContent.charAt(0).toUpperCase() + $badge.textContent.slice(1);\n            $badge.classList.add(\"medium\");\n            $div.classList.add(\"medium-div\")\n        }\n        if (this.priority === \"low\"){\n            $badge.textContent = $badge.textContent.charAt(0).toUpperCase() + $badge.textContent.slice(1);\n            $badge.classList.add(\"low\");\n            $div.classList.add(\"low-div\")\n        }\n        $delete.addEventListener(\"click\", () => {\n            this.delete();\n        });\n    }\n\n    delete() {\n        _project__WEBPACK_IMPORTED_MODULE_1__.currentProject.tasks = _project__WEBPACK_IMPORTED_MODULE_1__.currentProject.tasks.filter((task) => task.id !== this.id);\n        _project__WEBPACK_IMPORTED_MODULE_1__.currentProject.renderTasks();\n    }\n\n    edit() {\n        const $popUp = document.getElementById(\"popUp\");\n        $popUp.style.display = \"flex\";\n        const $form = document.getElementById(\"form-edit\");\n        const $closeBtn = document.getElementById(\"close-edit\");\n        $closeBtn.addEventListener(\"click\", () => {\n            $form.reset();\n            $popUp.style.display = \"none\";\n        });\n       \n        $form.addEventListener(\"submit\", (e) => {\n            e.preventDefault();\n            const $title = document.getElementById(\"task-name-edit\");\n            if ($title.value === \"\") {\n                alert(\"The task must have a name.\");\n                return;\n            }\n            const $date = document.getElementById(\"task-date-edit\");\n            if ($date.value === \"\") {\n                alert(\"Please choose a deadline\");\n                return;\n            }\n            const $priority = document.getElementById(\"task-priority-edit\");\n\n            this.name = $title.value;\n            this.date = $date.value;\n            this.priority = $priority.value;\n            $popUp.style.display = \"none\";\n            _project__WEBPACK_IMPORTED_MODULE_1__.currentProject.renderTasks();\n        });\n    } \n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;