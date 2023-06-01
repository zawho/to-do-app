import { newToDoButton, newListButton, newToDoForm, titleInput, descriptionInput, 
    dueDateInput, priorityInput, listMenu, projectDiv } from "./ui";
import { allLists, checkForList } from "./lists";

// To do factory function.
const toDo = (title, description, dueDate, priority, list) => ({
    title, description, dueDate, priority, list});

// Hide to do.
function hideToDo() {
    this.style.display = 'none';
}

// Create expanded to do.
function createExpandedToDo(listVar) {
    const expandedToDoDiv = document.createElement('div');
    const expandedTitle = document.createElement('div');
    const expandedDescription = document.createElement('div');
    const expandedDueDate = document.createElement('div');
    const expandedPriority = document.createElement('div');
    expandedToDoDiv.className = `${listMenu.value}-expanded`.replaceAll(' ', '-');
    expandedToDoDiv.style.display = 'none';
    for (let i = 0; i < allLists[listVar].length; i++) {
        expandedTitle.innerText = allLists[listVar][allLists[listVar].length - 1].title;
        if (allLists[listVar][allLists[listVar].length - 1].dueDate === '') {
            expandedDueDate.innerText = 'no due date';
        } else {
            expandedDueDate.innerText = allLists[listVar][allLists[listVar].length - 1].dueDate;
        }
        if (allLists[listVar][allLists[listVar].length - 1].description === '') {
            expandedDescription.innerText = 'no description';
        } else {
            expandedDescription.innerText = allLists[listVar][allLists[listVar].length - 1].description;
        }
        projectDiv.appendChild(expandedToDoDiv);
        expandedToDoDiv.appendChild(expandedTitle);
        expandedToDoDiv.appendChild(expandedDescription);
        expandedToDoDiv.appendChild(expandedDueDate);
        if (priorityInput.checked) {
            expandedPriority.innerText = 'important';
            expandedToDoDiv.appendChild(expandedPriority);
        }
    }
}

// Display to do.
function displayToDo(listVar) {
    const toDoDisplay = document.createElement('div');
    const displayTitle = document.createElement('div');
    const displayDueDate = document.createElement('div');
    const displayPriority = document.createElement('div');
    toDoDisplay.className = `${listMenu.value}`.replaceAll(' ', '-');
    toDoDisplay.style.display = 'flex';
    toDoDisplay.style.gap = '10px';
    for (let i = 0; i < allLists[listVar].length; i++) {
        displayTitle.innerText = allLists[listVar][allLists[listVar].length - 1].title;
        if (allLists[listVar][allLists[listVar].length - 1].dueDate === '') {
            displayDueDate.innerText = 'no due date';
        } else {
            displayDueDate.innerText = allLists[listVar][allLists[listVar].length - 1].dueDate;
        }
        projectDiv.appendChild(toDoDisplay);
        toDoDisplay.appendChild(displayTitle);
        toDoDisplay.appendChild(displayDueDate);
        if (priorityInput.checked) {
            displayPriority.innerText = 'important';
            toDoDisplay.appendChild(displayPriority);
        }
        toDoDisplay.addEventListener('click', hideToDo);
    }
    if (projectDiv.id === listVar) {
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