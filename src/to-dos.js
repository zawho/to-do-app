import { newToDoButton, newListButton, newToDoForm, titleInput, descriptionInput, 
    dueDateInput, priorityInput, listMenu, projectDiv } from "./ui";
import { allLists, checkForList } from "./lists";

// To do factory function.
const toDo = (title, description, dueDate, priority, list) => ({
    title, description, dueDate, priority, list});

// Expand to do.
function expandToDo() {
    if (!(this.id.includes('-expanded')) && this.style.display === 'flex') {
        this.style.display = 'none';
        this.nextSibling.style.display = 'flex';
    }
    if (this.id.includes('-expanded') && this.style.display === 'flex') {
        this.style.display = 'none';
        this.previousSibling.style.display = 'flex';
    }
}

// test
function test(listVar, a, b, c, d, e) {
    const toDoVar = a;
    const titleVar = b;
    const dueDateVar = c;
    const priorityVar = d;
    const descriptionVar = e;
    for (let i = 0; i < allLists[listVar].length; i++) {
        titleVar.innerText = allLists[listVar][allLists[listVar].length - 1].title;
        if (allLists[listVar][allLists[listVar].length - 1].dueDate === '') {
            dueDateVar.innerText = 'no due date';
        } else {
            dueDateVar.innerText = allLists[listVar][allLists[listVar].length - 1].dueDate;
        }
        if (allLists[listVar][allLists[listVar].length - 1].description === '') {
            descriptionVar.innerText = 'no description';
        } else {
            descriptionVar.innerText = allLists[listVar][allLists[listVar].length - 1].description;
        }
        projectDiv.appendChild(toDoVar);
        toDoVar.appendChild(titleVar);
        toDoVar.appendChild(descriptionVar);
        toDoVar.appendChild(dueDateVar);
        if (priorityInput.checked) {
            priorityVar.innerText = 'important';
            toDoVar.appendChild(priorityVar);
        }
        toDoVar.addEventListener('click', expandToDo);
    }
}

// Create expanded to do.
function createExpandedToDo(x) {
    const expandedToDoDiv = document.createElement('div');
    const expandedTitle = document.createElement('div');
    const expandedDescription = document.createElement('div');
    const expandedDueDate = document.createElement('div');
    const expandedPriority = document.createElement('div');
    expandedToDoDiv.className = `${listMenu.value}-expanded`.replaceAll(' ', '-');
    expandedToDoDiv.style.display = 'flex';
    expandedToDoDiv.style.flexDirection = 'column';
    expandedToDoDiv.style.gap = '10px';
    expandedToDoDiv.style.display = 'none';
    for (let i = 0; i < allLists[x].length; i++) {
        expandedToDoDiv.id = `${allLists[x][allLists[x].length - 1].title}-expanded`.replaceAll(' ', '-');
    }
    test(x, expandedToDoDiv, expandedTitle, expandedDueDate, expandedPriority, 
        expandedDescription);
}

// Display to do.
function displayToDo(x) {
    const toDoDisplay = document.createElement('div');
    const displayTitle = document.createElement('div');
    const displayDescription = document.createElement('div');
    const displayDueDate = document.createElement('div');
    const displayPriority = document.createElement('div');
    toDoDisplay.className = `${listMenu.value}`.replaceAll(' ', '-');
    toDoDisplay.style.display = 'flex';
    toDoDisplay.style.gap = '10px';
    displayDescription.style.display = 'none';
    for (let i = 0; i < allLists[x].length; i++) {
        toDoDisplay.id = `${allLists[x][allLists[x].length - 1].title}`.replaceAll(' ', '-');
    }
    test(x, toDoDisplay, displayTitle, displayDueDate, displayPriority, displayDescription);
    if (projectDiv.id === x) {
        toDoDisplay.style.display = 'flex';
    } else {
        toDoDisplay.style.display = 'none';
    }
}

// Create to do.
function createToDo(e) {
    if (!(titleInput.value === '')) {
        e.preventDefault();
        const currentList = checkForList();
        allLists[currentList].push(toDo(titleInput.value, descriptionInput.value, 
            dueDateInput.value, priorityInput.checked, listMenu.value));
        newToDoForm.style.display = 'none';
        newToDoButton.style.display = 'flex';
        newListButton.style.display = 'flex';
        displayToDo(currentList);
        createExpandedToDo(currentList);
    }
}

export default createToDo;