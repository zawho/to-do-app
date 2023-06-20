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

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cancelListForm\": () => (/* binding */ cancelListForm),\n/* harmony export */   \"cancelToDoForm\": () => (/* binding */ cancelToDoForm),\n/* harmony export */   \"openListForm\": () => (/* binding */ openListForm),\n/* harmony export */   \"openToDoForm\": () => (/* binding */ openToDoForm)\n/* harmony export */ });\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\nfunction openToDoForm() {\n    _ui__WEBPACK_IMPORTED_MODULE_0__.newToDoForm.reset();\n    _ui__WEBPACK_IMPORTED_MODULE_0__.newToDoButton.style.display = 'none';\n    _ui__WEBPACK_IMPORTED_MODULE_0__.newListButton.style.display = 'none';\n    _ui__WEBPACK_IMPORTED_MODULE_0__.newToDoForm.style.display = 'flex';\n    _ui__WEBPACK_IMPORTED_MODULE_0__.newToDoForm.style.flexDirection = 'column';\n    _ui__WEBPACK_IMPORTED_MODULE_0__.newToDoForm.style.alignItems = 'flex-start';\n    _ui__WEBPACK_IMPORTED_MODULE_0__.newToDoForm.style.gap = '10px';\n}\n\nfunction cancelToDoForm() {\n    _ui__WEBPACK_IMPORTED_MODULE_0__.newToDoButton.style.display = 'flex';\n    _ui__WEBPACK_IMPORTED_MODULE_0__.newListButton.style.display = 'flex';\n    _ui__WEBPACK_IMPORTED_MODULE_0__.newToDoForm.style.display = 'none';\n}\n\nfunction openListForm() {\n    _ui__WEBPACK_IMPORTED_MODULE_0__.newListForm.reset();\n    _ui__WEBPACK_IMPORTED_MODULE_0__.newToDoButton.style.display = 'none';\n    _ui__WEBPACK_IMPORTED_MODULE_0__.newListButton.style.display = 'none';\n    _ui__WEBPACK_IMPORTED_MODULE_0__.newListForm.style.display = 'flex';\n    _ui__WEBPACK_IMPORTED_MODULE_0__.newListForm.style.display = 'flex';\n    _ui__WEBPACK_IMPORTED_MODULE_0__.newListForm.style.flexDirection = 'column';\n    _ui__WEBPACK_IMPORTED_MODULE_0__.newListForm.style.alignItems = 'flex-start';\n    _ui__WEBPACK_IMPORTED_MODULE_0__.newListForm.style.gap = '10px';\n}\n\nfunction cancelListForm() {\n    _ui__WEBPACK_IMPORTED_MODULE_0__.newToDoButton.style.display = 'flex';\n    _ui__WEBPACK_IMPORTED_MODULE_0__.newListButton.style.display = 'flex';\n    _ui__WEBPACK_IMPORTED_MODULE_0__.newListForm.style.display = 'none';\n}\n\n\n\n//# sourceURL=webpack://to-do-app/./src/forms.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _to_dos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-dos */ \"./src/to-dos.js\");\n/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lists */ \"./src/lists.js\");\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms */ \"./src/forms.js\");\n\n\n\n\n\n_ui__WEBPACK_IMPORTED_MODULE_0__.newToDoButton.addEventListener('click', _forms__WEBPACK_IMPORTED_MODULE_3__.openToDoForm);\n_ui__WEBPACK_IMPORTED_MODULE_0__.newListButton.addEventListener('click', _forms__WEBPACK_IMPORTED_MODULE_3__.openListForm);\n_ui__WEBPACK_IMPORTED_MODULE_0__.addToDoButton.addEventListener('click', _to_dos__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n_ui__WEBPACK_IMPORTED_MODULE_0__.addListButton.addEventListener('click', _lists__WEBPACK_IMPORTED_MODULE_2__.createList);\n_ui__WEBPACK_IMPORTED_MODULE_0__.cancelToDoButton.addEventListener('click', _forms__WEBPACK_IMPORTED_MODULE_3__.cancelToDoForm);\n_ui__WEBPACK_IMPORTED_MODULE_0__.cancelListButton.addEventListener('click', _forms__WEBPACK_IMPORTED_MODULE_3__.cancelListForm);\n_ui__WEBPACK_IMPORTED_MODULE_0__.defaultListButton.addEventListener('click', _lists__WEBPACK_IMPORTED_MODULE_2__.displayList);\n_ui__WEBPACK_IMPORTED_MODULE_0__.otherListButton.addEventListener('click', _lists__WEBPACK_IMPORTED_MODULE_2__.displayList);\n\n//# sourceURL=webpack://to-do-app/./src/index.js?");

/***/ }),

/***/ "./src/lists.js":
/*!**********************!*\
  !*** ./src/lists.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allLists\": () => (/* binding */ allLists),\n/* harmony export */   \"checkCurrentList\": () => (/* binding */ checkCurrentList),\n/* harmony export */   \"checkListMenu\": () => (/* binding */ checkListMenu),\n/* harmony export */   \"createList\": () => (/* binding */ createList),\n/* harmony export */   \"displayList\": () => (/* binding */ displayList)\n/* harmony export */ });\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\n// List object.\nconst allLists = {\n    default: [],\n    other: [],\n}\n\n// Highlight selected list.\nfunction highlightList() {\n    const listButtonArr = Array.from(_ui__WEBPACK_IMPORTED_MODULE_0__.listButtonDiv.childNodes);\n    for (let i = 0; i < listButtonArr.length; i++) {\n        if (listButtonArr[i].className === _ui__WEBPACK_IMPORTED_MODULE_0__.projectDiv.id) {\n            listButtonArr[i].style.border = '2px solid red';\n        } else {\n            listButtonArr[i].style.border = '2px solid black';\n        }\n    }\n}\n\n// Display List.\nfunction displayList() {\n    _ui__WEBPACK_IMPORTED_MODULE_0__.projectDiv.id = this.className.replaceAll(' ', '-');\n    const listArr = Array.from(_ui__WEBPACK_IMPORTED_MODULE_0__.projectDiv.childNodes);\n    for (let i = 0; i < listArr.length; i++) {\n        if (listArr[i].className === _ui__WEBPACK_IMPORTED_MODULE_0__.projectDiv.id) {\n            listArr[i].style.display = 'flex';\n        } else {\n            listArr[i].style.display = 'none';\n        }\n    }\n    highlightList();\n}\n\n// Create new list.\nfunction createList(e) {\n    e.preventDefault();\n    allLists[_ui__WEBPACK_IMPORTED_MODULE_0__.listNameInput.value] = [];\n    const newListOption = document.createElement('option');\n    newListOption.value = _ui__WEBPACK_IMPORTED_MODULE_0__.listNameInput.value;\n    newListOption.innerText = _ui__WEBPACK_IMPORTED_MODULE_0__.listNameInput.value;\n    _ui__WEBPACK_IMPORTED_MODULE_0__.listMenu.appendChild(newListOption);\n    const newList = document.createElement('button');\n    newList.className = `${_ui__WEBPACK_IMPORTED_MODULE_0__.listNameInput.value}`.replaceAll(' ', '-');\n    newList.id = `${_ui__WEBPACK_IMPORTED_MODULE_0__.listNameInput.value}-list`.replaceAll(' ', '-');\n    newList.innerText = _ui__WEBPACK_IMPORTED_MODULE_0__.listNameInput.value;\n    _ui__WEBPACK_IMPORTED_MODULE_0__.listButtonDiv.appendChild(newList);\n    newList.addEventListener('click', displayList);\n    _ui__WEBPACK_IMPORTED_MODULE_0__.newListForm.style.display = 'none';\n    _ui__WEBPACK_IMPORTED_MODULE_0__.newToDoButton.style.display = 'flex';\n    _ui__WEBPACK_IMPORTED_MODULE_0__.newListButton.style.display = 'flex';\n}\n\n// Check for list name from array and menu.\nfunction checkListMenu(listMenuVar) {\n    const keys = Object.keys(allLists);\n    let selectedList = '';\n    keys.forEach(x => {\n        if (x === listMenuVar.value) {\n            selectedList = x;\n        }\n    });\n    return selectedList;\n}\n\n// Check for currently selected list from list button array.\nfunction checkCurrentList() {\n    let currentList;\n    const listButtonArr = Array.from(_ui__WEBPACK_IMPORTED_MODULE_0__.listButtonDiv.childNodes);\n    for (let i = 0; i < listButtonArr.length; i++) {\n        const listStyles = window.getComputedStyle(listButtonArr[i]);\n        if (listStyles.border === '2px solid rgb(255, 0, 0)') {\n            currentList = listButtonArr[i].className.replaceAll('-', ' ');\n        }\n    }\n    return currentList;\n}\n\n\n\n//# sourceURL=webpack://to-do-app/./src/lists.js?");

/***/ }),

/***/ "./src/to-dos.js":
/*!***********************!*\
  !*** ./src/to-dos.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lists */ \"./src/lists.js\");\n\n\n\n// To do factory function.\nconst toDo = (title, description, dueDate, priority, list) => ({\n    title, description, dueDate, priority, list});\n\n// Expand to do.\nfunction expandToDo() {\n    if (!(this.id.includes('-expanded')) && this.style.display === 'flex') {\n        this.style.display = 'none';\n        this.nextSibling.style.display = 'flex';\n    }\n    if (this.id.includes('-expanded') && this.style.display === 'flex') {\n        this.style.display = 'none';\n        this.previousSibling.style.display = 'flex';\n    }\n}\n\n// Prevent click event propagation on editable to do.\nfunction preventPropagation(e) {\n    e.stopPropagation();\n}\n\n// Confirm edit.\nfunction confirmEdit(event, a, b, c, d, e, f, g, h, j) {\n    preventPropagation(event);\n    const editedToDo = a;\n    const editedTitle = b;\n    const editedDescription = c;\n    const editedDate = d;\n    const editedPriority = e;\n    const editedTitleLabel = f;\n    const editedDescriptionLabel = g;\n    const editedPriorityLabel = h;\n    const editedList = j;\n    const selectedListEdit = (0,_lists__WEBPACK_IMPORTED_MODULE_1__.checkListMenu)(editedList);\n    const editedID = editedTitle.id.replace('-edit', '');\n    const currentList = (0,_lists__WEBPACK_IMPORTED_MODULE_1__.checkCurrentList)();\n    const projectArr = Array.from(_ui__WEBPACK_IMPORTED_MODULE_0__.projectDiv.childNodes);\n    const toDoArr = Array.from(editedToDo.previousSibling.childNodes);\n    const expandedToDoArr = Array.from(editedToDo.childNodes);\n    for (let i = 0; i < _lists__WEBPACK_IMPORTED_MODULE_1__.allLists[currentList].length; i++) {\n        if (_lists__WEBPACK_IMPORTED_MODULE_1__.allLists[currentList][i].title === editedID) {\n            _lists__WEBPACK_IMPORTED_MODULE_1__.allLists[currentList][i].title = editedTitle.value;\n            _lists__WEBPACK_IMPORTED_MODULE_1__.allLists[currentList][i].description = editedDescription.value.\n            replaceAll('\\n', ' ');\n            _lists__WEBPACK_IMPORTED_MODULE_1__.allLists[currentList][i].dueDate = editedDate.value;\n            _lists__WEBPACK_IMPORTED_MODULE_1__.allLists[currentList][i].priority = editedPriority.checked;\n            _lists__WEBPACK_IMPORTED_MODULE_1__.allLists[currentList][i].list = selectedListEdit;\n        }\n    }\n    console.log(_lists__WEBPACK_IMPORTED_MODULE_1__.allLists[currentList][0]);\n    for (let i = 0; i < projectArr.length; i++) {\n        if (projectArr[i].id === editedID) {\n            projectArr[i].id = editedTitle.value;\n        }\n        if (projectArr[i].id === `${editedID}-expanded`) {\n            projectArr[i].id = `${editedTitle.value}-expanded`;\n        }\n        if (!(projectArr[i].className.includes('-expanded')) &&\n           !(projectArr[i].className === selectedListEdit)) {\n            projectArr[i].className = selectedListEdit;\n            projectArr[i].style.display = 'none';\n        }\n        if (projectArr[i].className.includes('-expanded') && \n           !(projectArr[i].className.replace('-expanded', '') === selectedListEdit)) {\n            projectArr[i].className = `${selectedListEdit}-expanded`;\n            projectArr[i].style.display = 'none';\n        }\n    }\n    for (let i = 0; i < toDoArr.length; i++) {\n        if (toDoArr[i].className === 'title-div') {\n            toDoArr[i].innerText = editedTitle.value;\n        }\n        if (toDoArr[i].className === 'description-div') {\n            if (editedDescription.value === '') {\n                toDoArr[i].innerText = 'no description';\n            } else {\n                toDoArr[i].innerText = editedDescription.value;\n            }\n        }\n        if (toDoArr[i].className === 'date-div') {\n            if (editedDate.value === '') {\n                toDoArr[i].innerText = 'no due date';\n            } else {\n                toDoArr[i].innerText = editedDate.value;\n            }\n        }\n        if (toDoArr[i].className === 'priority-div') {\n            if (editedPriority.checked) {\n                toDoArr[i].innerText = 'important';\n            } else {\n                toDoArr[i].innerText = '';\n            }\n        }\n    }\n    for (let i = 0; i < expandedToDoArr.length; i++) {\n        if (expandedToDoArr[i].className === 'done-button') {\n            expandedToDoArr[i].remove();\n        }\n        if (expandedToDoArr[i].className === 'cancel-edit-button') {\n            expandedToDoArr[i].remove();\n        }\n        if (expandedToDoArr[i].className === 'edit-button') {\n            expandedToDoArr[i].style.display = 'flex';\n        }\n        if (expandedToDoArr[i].className === 'delete-button') {\n            expandedToDoArr[i].style.display = 'flex';\n        }\n        if (expandedToDoArr[i].className === 'title-div') {\n            expandedToDoArr[i].innerText = editedTitle.value;\n            editedTitleLabel.remove();\n            editedTitle.remove();\n        }\n        if (expandedToDoArr[i].className === 'description-div') {\n            if (editedDescription.value === '') {\n                expandedToDoArr[i].innerText = 'no description';\n            } else {\n                expandedToDoArr[i].innerText = editedDescription.value;\n            }\n            editedDescriptionLabel.remove();\n            editedDescription.remove();\n        }\n        if (expandedToDoArr[i].className === 'date-div') {\n            if (editedDate.value === '') {\n                expandedToDoArr[i].innerText = 'no due date';\n            } else {\n                expandedToDoArr[i].innerText = editedDate.value;\n            }\n            editedDate.remove();\n        }\n        if (expandedToDoArr[i].className === 'priority-div') {\n            if (editedPriority.checked) {\n                expandedToDoArr[i].innerText = 'important';\n            } else {\n                expandedToDoArr[i].innerText = '';\n            }\n            editedPriority.remove();\n            editedPriorityLabel.remove();\n        }\n        if (expandedToDoArr[i].className === 'list-div') {\n            expandedToDoArr[i].remove();\n        }\n    }\n}\n\n// Cancel edit and close editor.\nfunction cancelEdit(event, a, b, c, d, e, f, g, h) {\n    preventPropagation(event);\n    const editedToDo = a;\n    const editedTitle = b;\n    const editedDescription = c;\n    const editedDate = d;\n    const editedPriority = e;\n    const editedTitleLabel = f;\n    const editedDescriptionLabel = g;\n    const editedPriorityLabel = h;\n    const toDoArr = Array.from(editedToDo.previousSibling.childNodes);\n    let toDoTitle;\n    let toDoDescription;\n    let toDoDate;\n    let toDoPriority;\n    const expandedToDoArr = Array.from(editedToDo.childNodes);\n    for (let i = 0; i < toDoArr.length; i++) {\n        if (toDoArr[i].className === 'title-div') {\n            toDoTitle = toDoArr[i].innerText;\n        }\n        if (toDoArr[i].className === 'description-div') {\n            toDoDescription = toDoArr[i].innerText;\n        }\n        if (toDoArr[i].className === 'date-div') {\n            toDoDate = toDoArr[i].textContent;\n        }\n        if (toDoArr[i].className === 'priority-div') {\n            toDoPriority = toDoArr[i].textContent;\n        } \n    }\n    for (let i = 0; i < expandedToDoArr.length; i++) {\n        if (expandedToDoArr[i].className === 'done-button') {\n            expandedToDoArr[i].remove();\n        }\n        if (expandedToDoArr[i].className === 'cancel-edit-button') {\n            expandedToDoArr[i].remove();\n        }\n        if (expandedToDoArr[i].className === 'edit-button') {\n            expandedToDoArr[i].style.display = 'flex';\n        }\n        if (expandedToDoArr[i].className === 'delete-button') {\n            expandedToDoArr[i].style.display = 'flex';\n        }\n        if (expandedToDoArr[i].className === 'title-div') {\n            expandedToDoArr[i].innerText = toDoTitle;\n            editedTitleLabel.remove();\n            editedTitle.remove();\n        }\n        if (expandedToDoArr[i].className === 'description-div') {\n            expandedToDoArr[i].innerText = toDoDescription;\n            editedDescriptionLabel.remove();\n            editedDescription.remove();\n        }\n        if (expandedToDoArr[i].className === 'date-div') {\n            expandedToDoArr[i].innerText = toDoDate;\n            editedDate.remove();\n        }\n        if (expandedToDoArr[i].className === 'priority-div') {\n            expandedToDoArr[i].innerText = toDoPriority;\n            editedPriority.remove();\n            editedPriorityLabel.remove();\n        }\n        if (expandedToDoArr[i].className === 'list-div') {\n            expandedToDoArr[i].remove();\n        }\n    }\n}\n\n// Display correct list in editor list menu.\nfunction displaySelectedList(listMenuVar) {\n    const currentList = (0,_lists__WEBPACK_IMPORTED_MODULE_1__.checkCurrentList)();\n    const listMenuArr = Array.from(listMenuVar);\n    for (let i = 0; i < listMenuArr.length; i++) {\n        if (listMenuArr[i].innerText === currentList) {\n            listMenuArr[i].selected = true;\n        }\n    }\n}\n\n// Open to do editor.\nfunction openEditor(event, a) {\n    preventPropagation(event);\n    const toDoEdit = a;\n    const titleEditLabel = document.createElement('div');\n    const titleEdit = document.createElement('input');\n    const descriptionEditLabel = document.createElement('div');\n    const descriptionEdit = document.createElement('textarea');\n    const dateEdit = document.createElement('input');\n    const priorityEdit = document.createElement('input');\n    const priorityEditLabel = document.createElement('div');\n    const listEditDiv = document.createElement('div');\n    const listEditLabel = document.createElement('div');\n    const listMenuEdit = _ui__WEBPACK_IMPORTED_MODULE_0__.listMenu.cloneNode(true);\n    const doneButton = document.createElement('button');\n    const cancelEditButton = document.createElement('button');\n    titleEdit.type = 'text';\n    descriptionEdit.style.resize = 'none';\n    descriptionEdit.cols = '20';\n    descriptionEdit.rows = '5';\n    dateEdit.type = 'date';\n    priorityEdit.type = 'checkbox';\n    listEditDiv.className = 'list-div';\n    listEditLabel.innerText = 'list';\n    listMenuEdit.id = `${toDoEdit.id.replace('-expanded', '')}-list-select`.\n    replaceAll(' ', '-');\n    doneButton.className = 'done-button';\n    doneButton.innerText = 'done';\n    doneButton.style.alignSelf = 'flex-end';\n    cancelEditButton.className = 'cancel-edit-button';\n    cancelEditButton.innerText = 'cancel';\n    cancelEditButton.style.alignSelf = 'flex-end';\n    const toDoArr = Array.from(toDoEdit.childNodes);\n    for (let i = 0; i < toDoArr.length; i++) {\n        if (toDoArr[i].className === 'edit-button') {\n            toDoArr[i].style.display = 'none';\n        }\n        if (toDoArr[i].className === 'delete-button') {\n            toDoArr[i].style.display = 'none';\n        }\n        if (toDoArr[i].className === 'title-div') {\n            titleEdit.addEventListener('click', preventPropagation);\n            titleEdit.value = toDoArr[i].innerText;\n            titleEdit.id = `${toDoArr[i].innerText}-edit`.replaceAll(' ', '-');\n            toDoArr[i].innerText = '';\n            titleEditLabel.id = `${titleEdit.id}-label`;\n            titleEditLabel.innerText = 'title';\n            toDoArr[i].appendChild(titleEditLabel);\n            toDoArr[i].appendChild(titleEdit);\n        }\n        if (toDoArr[i].className === 'description-div') {\n            descriptionEdit.addEventListener('click', preventPropagation);\n            if (toDoArr[i].innerText === 'no description') {\n                descriptionEdit.innerText = '';\n            } else {\n                descriptionEdit.innerText = toDoArr[i].innerText.replaceAll('\\n', ' ');\n            }\n            descriptionEdit.id = `${toDoEdit.id.replace('-expanded', '')}-description-edit`.\n            replaceAll(' ', '-');\n            toDoArr[i].innerText = '';\n            descriptionEditLabel.id = `${descriptionEdit.id}-label`;\n            descriptionEditLabel.innerText = 'description';\n            toDoArr[i].appendChild(descriptionEditLabel);\n            toDoArr[i].appendChild(descriptionEdit);\n        }\n        if (toDoArr[i].className === 'date-div') {\n            if (!(toDoArr[i].innerText === 'no due date')) {\n                dateEdit.value = toDoArr[i].innerText;\n            }\n            dateEdit.addEventListener('click', preventPropagation);\n            dateEdit.id = `${toDoEdit.id.replace('-expanded', '')}-date-edit`.\n            replaceAll(' ', '-');\n            toDoArr[i].innerText = '';\n            toDoArr[i].appendChild(dateEdit);\n        }\n        if (toDoArr[i].className === 'priority-div') {\n            if (toDoArr[i].innerText === 'important') {\n                priorityEdit.checked = true;\n            }\n            priorityEdit.addEventListener('click', preventPropagation);\n            priorityEdit.id = `${toDoEdit.id.replace('-expanded', '')}-priority-edit`.\n            replaceAll(' ', '-');\n            toDoArr[i].style.display = 'flex';\n            toDoArr[i].style.gap = '5px';\n            toDoArr[i].innerText = '';\n            priorityEditLabel.id = `${priorityEdit.id}-label`;\n            priorityEditLabel.innerText = 'important';\n            toDoArr[i].appendChild(priorityEdit);\n            toDoArr[i].appendChild(priorityEditLabel);\n        }\n    }\n    displaySelectedList(listMenuEdit);\n    listMenuEdit.addEventListener('click', preventPropagation);\n    listEditDiv.appendChild(listEditLabel);\n    listEditDiv.appendChild(listMenuEdit);\n    toDoEdit.appendChild(listEditDiv);\n    toDoEdit.appendChild(doneButton);\n    toDoEdit.appendChild(cancelEditButton);\n    doneButton.addEventListener('click', (eventTwo) => confirmEdit(eventTwo, toDoEdit,\n         titleEdit, descriptionEdit, dateEdit, priorityEdit, titleEditLabel, \n         descriptionEditLabel, priorityEditLabel, listMenuEdit));\n    cancelEditButton.addEventListener('click', (eventThree) => cancelEdit(eventThree, toDoEdit,\n        titleEdit, descriptionEdit, dateEdit, priorityEdit, titleEditLabel, \n        descriptionEditLabel, priorityEditLabel));\n}\n\n// Helper function for display to do and create expanded to do.\nfunction helpToDo(listVar, a, b, c, d, e) {\n    const toDoVar = a;\n    const titleVar = b;\n    const dueDateVar = c;\n    const priorityVar = d;\n    const descriptionVar = e;\n    titleVar.className = 'title-div';\n    dueDateVar.className = 'date-div';\n    priorityVar.className = 'priority-div';\n    descriptionVar.className = 'description-div';\n    for (let i = 0; i < _lists__WEBPACK_IMPORTED_MODULE_1__.allLists[listVar].length; i++) {\n        titleVar.innerText = _lists__WEBPACK_IMPORTED_MODULE_1__.allLists[listVar][_lists__WEBPACK_IMPORTED_MODULE_1__.allLists[listVar].length - 1].title;\n        if (_lists__WEBPACK_IMPORTED_MODULE_1__.allLists[listVar][_lists__WEBPACK_IMPORTED_MODULE_1__.allLists[listVar].length - 1].dueDate === '') {\n            dueDateVar.innerText = 'no due date';\n        } else {\n            dueDateVar.innerText = _lists__WEBPACK_IMPORTED_MODULE_1__.allLists[listVar][_lists__WEBPACK_IMPORTED_MODULE_1__.allLists[listVar].length - 1].dueDate;\n        }\n        if (_lists__WEBPACK_IMPORTED_MODULE_1__.allLists[listVar][_lists__WEBPACK_IMPORTED_MODULE_1__.allLists[listVar].length - 1].description === '') {\n            descriptionVar.innerText = 'no description';\n        } else {\n            descriptionVar.innerText = _lists__WEBPACK_IMPORTED_MODULE_1__.allLists[listVar][_lists__WEBPACK_IMPORTED_MODULE_1__.allLists[listVar].length - 1]\n            .description;\n        }\n        _ui__WEBPACK_IMPORTED_MODULE_0__.projectDiv.appendChild(toDoVar);\n        toDoVar.appendChild(titleVar);\n        toDoVar.appendChild(descriptionVar);\n        toDoVar.appendChild(dueDateVar);\n        if (_ui__WEBPACK_IMPORTED_MODULE_0__.priorityInput.checked) {\n            priorityVar.innerText = 'important';\n        } else {\n            priorityVar.innerText = '';\n        }\n        toDoVar.appendChild(priorityVar);\n        toDoVar.addEventListener('click', expandToDo);\n    }\n}\n\n// Delete to do.\nfunction deleteToDo(event) {\n    preventPropagation(event);\n    const currentList = (0,_lists__WEBPACK_IMPORTED_MODULE_1__.checkCurrentList)();\n    const currentToDo = this.parentNode;\n    const currentToDoID = this.parentNode.id.replace('-expanded', '').replaceAll('-', ' ');\n    for (let i = 0; i < _lists__WEBPACK_IMPORTED_MODULE_1__.allLists[currentList].length; i++) {\n        if (_lists__WEBPACK_IMPORTED_MODULE_1__.allLists[currentList][i].title === currentToDoID) {\n            _lists__WEBPACK_IMPORTED_MODULE_1__.allLists[currentList].splice(i, 1);\n        }\n    }\n    currentToDo.previousSibling.remove();\n    currentToDo.remove();\n}\n\n// Create expanded to do.\nfunction createExpandedToDo(currentList) {\n    const expandedToDoDiv = document.createElement('div');\n    const expandedTitle = document.createElement('div');\n    const expandedDescription = document.createElement('div');\n    const expandedDueDate = document.createElement('div');\n    const expandedPriority = document.createElement('div');\n    const editButton = document.createElement('button');\n    const deleteButton = document.createElement('button');\n    expandedToDoDiv.className = `${_ui__WEBPACK_IMPORTED_MODULE_0__.listMenu.value}-expanded`.replaceAll(' ', '-');\n    expandedToDoDiv.style.display = 'flex';\n    expandedToDoDiv.style.flexDirection = 'column';\n    expandedToDoDiv.style.gap = '10px';\n    expandedToDoDiv.style.padding = '5px';\n    editButton.innerText = 'edit';\n    editButton.className = 'edit-button';\n    editButton.style.alignSelf = 'flex-end';\n    deleteButton.innerText = 'delete';\n    deleteButton.className = 'delete-button';\n    deleteButton.style.alignSelf = 'flex-end';\n    expandedToDoDiv.style.display = 'none';\n    for (let i = 0; i < _lists__WEBPACK_IMPORTED_MODULE_1__.allLists[currentList].length; i++) {\n        expandedToDoDiv.id = `${_lists__WEBPACK_IMPORTED_MODULE_1__.allLists[currentList][_lists__WEBPACK_IMPORTED_MODULE_1__.allLists[currentList].length - 1]\n            .title}-expanded`.replaceAll(' ', '-');\n    }\n    helpToDo(currentList, expandedToDoDiv, expandedTitle, expandedDueDate, expandedPriority, \n        expandedDescription);\n    expandedToDoDiv.appendChild(editButton);\n    expandedToDoDiv.appendChild(deleteButton);\n    editButton.addEventListener('click', (event) => openEditor(event, expandedToDoDiv));\n    deleteButton.addEventListener('click', deleteToDo);\n}\n\n// Display to do.\nfunction displayToDo(currentList) {\n    const toDoDisplay = document.createElement('div');\n    const displayTitle = document.createElement('div');\n    const displayDescription = document.createElement('div');\n    const displayDueDate = document.createElement('div');\n    const displayPriority = document.createElement('div');\n    toDoDisplay.className = `${_ui__WEBPACK_IMPORTED_MODULE_0__.listMenu.value}`.replaceAll(' ', '-');\n    toDoDisplay.style.display = 'flex';\n    toDoDisplay.style.justifyContent = 'space-between';\n    toDoDisplay.style.gap = '10px';\n    toDoDisplay.style.padding = '5px';\n    displayDescription.style.display = 'none';\n    for (let i = 0; i < _lists__WEBPACK_IMPORTED_MODULE_1__.allLists[currentList].length; i++) {\n        toDoDisplay.id = `${_lists__WEBPACK_IMPORTED_MODULE_1__.allLists[currentList][_lists__WEBPACK_IMPORTED_MODULE_1__.allLists[currentList].length - 1].title}`\n        .replaceAll(' ', '-');\n    }\n    helpToDo(currentList, toDoDisplay, displayTitle, displayDueDate, displayPriority, \n        displayDescription);\n    if (_ui__WEBPACK_IMPORTED_MODULE_0__.projectDiv.id === currentList) {\n        toDoDisplay.style.display = 'flex';\n    } else {\n        toDoDisplay.style.display = 'none';\n    }\n}\n\n// Create to do.\nfunction createToDo(e) {\n    if (!(_ui__WEBPACK_IMPORTED_MODULE_0__.titleInput.value === '')) {\n        e.preventDefault();\n        const selectedList = (0,_lists__WEBPACK_IMPORTED_MODULE_1__.checkListMenu)(_ui__WEBPACK_IMPORTED_MODULE_0__.listMenu);\n        _lists__WEBPACK_IMPORTED_MODULE_1__.allLists[selectedList].push(toDo(_ui__WEBPACK_IMPORTED_MODULE_0__.titleInput.value, \n            _ui__WEBPACK_IMPORTED_MODULE_0__.descriptionInput.value.replaceAll('\\n', ' '), \n            _ui__WEBPACK_IMPORTED_MODULE_0__.dueDateInput.value, \n            _ui__WEBPACK_IMPORTED_MODULE_0__.priorityInput.checked, _ui__WEBPACK_IMPORTED_MODULE_0__.listMenu.value));\n        _ui__WEBPACK_IMPORTED_MODULE_0__.newToDoForm.style.display = 'none';\n        _ui__WEBPACK_IMPORTED_MODULE_0__.newToDoButton.style.display = 'flex';\n        _ui__WEBPACK_IMPORTED_MODULE_0__.newListButton.style.display = 'flex';\n        displayToDo(selectedList);\n        createExpandedToDo(selectedList);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createToDo);\n\n//# sourceURL=webpack://to-do-app/./src/to-dos.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addListButton\": () => (/* binding */ addListButton),\n/* harmony export */   \"addToDoButton\": () => (/* binding */ addToDoButton),\n/* harmony export */   \"cancelListButton\": () => (/* binding */ cancelListButton),\n/* harmony export */   \"cancelToDoButton\": () => (/* binding */ cancelToDoButton),\n/* harmony export */   \"defaultListButton\": () => (/* binding */ defaultListButton),\n/* harmony export */   \"descriptionInput\": () => (/* binding */ descriptionInput),\n/* harmony export */   \"dueDateInput\": () => (/* binding */ dueDateInput),\n/* harmony export */   \"listButtonDiv\": () => (/* binding */ listButtonDiv),\n/* harmony export */   \"listMenu\": () => (/* binding */ listMenu),\n/* harmony export */   \"listNameInput\": () => (/* binding */ listNameInput),\n/* harmony export */   \"newListButton\": () => (/* binding */ newListButton),\n/* harmony export */   \"newListForm\": () => (/* binding */ newListForm),\n/* harmony export */   \"newToDoButton\": () => (/* binding */ newToDoButton),\n/* harmony export */   \"newToDoForm\": () => (/* binding */ newToDoForm),\n/* harmony export */   \"otherListButton\": () => (/* binding */ otherListButton),\n/* harmony export */   \"priorityInput\": () => (/* binding */ priorityInput),\n/* harmony export */   \"projectDiv\": () => (/* binding */ projectDiv),\n/* harmony export */   \"titleInput\": () => (/* binding */ titleInput)\n/* harmony export */ });\nconst newToDoButton = document.querySelector('.new-to-do-button');\nconst newListButton = document.querySelector('.new-list-button');\nconst newToDoForm = document.querySelector('.new-to-do-form');\nconst titleInput = document.querySelector('.title-input');\nconst descriptionInput = document.querySelector('.description-input');\nconst dueDateInput = document.querySelector('.due-date-input');\nconst priorityInput = document.querySelector('.priority-input');\nconst listMenu = document.querySelector('.list-menu');\nconst addToDoButton = document.querySelector('.add-to-do-button');\nconst cancelToDoButton = document.querySelector('.cancel-to-do-button');\nconst newListForm = document.querySelector('.new-list-form');\nconst listNameInput = document.querySelector('.list-name-input');\nconst addListButton = document.querySelector('.add-list-button');\nconst cancelListButton = document.querySelector('.cancel-list-button');\nconst listButtonDiv = document.querySelector('.list-button-div');\nconst defaultListButton = document.getElementById('default-list');\nconst otherListButton = document.getElementById('other-list');\nconst projectDiv = document.querySelector('.project-div');\n\n\n\n//# sourceURL=webpack://to-do-app/./src/ui.js?");

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