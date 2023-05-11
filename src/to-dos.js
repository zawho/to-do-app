import { newToDoButton, newListButton, newToDoForm, titleInput, descriptionInput, 
    dueDateInput, priorityInput, listMenu, projectDiv } from "./ui";
import { allLists, checkForList } from "./lists";

let currentList;

// To do factory function.
const toDo = (title, description, dueDate, priority, list) => ({
    title, description, dueDate, priority, list});

// Display to do in default project.
function displayToDo() {
    const toDoDisplay = document.createElement('div');
    const displayTitle = document.createElement('div');
    const displayDueDate = document.createElement('div');
    const displayPriority = document.createElement('div');
    toDoDisplay.className = 'to-do-display';
    toDoDisplay.style.display = 'flex';
    toDoDisplay.style.gap = '10px';
    for (let i = 0; i < allLists[currentList].length; i++) {
        displayTitle.innerText = allLists[currentList][allLists[currentList].length - 1].title;
        if (allLists[currentList][allLists[currentList].length - 1].dueDate === '') {
            displayDueDate.innerText = 'no due date';
        } else {
            displayDueDate.innerText = allLists[currentList][allLists[currentList].length - 1].dueDate;
        }
        projectDiv.appendChild(toDoDisplay);
        toDoDisplay.appendChild(displayTitle);
        toDoDisplay.appendChild(displayDueDate);
        if (priorityInput.checked) {
            displayPriority.innerText = 'important';
            toDoDisplay.appendChild(displayPriority);
        }
    }
}

// Create to do.
function createToDo(e) {
    if (!(titleInput.value === '')) {
        e.preventDefault();
        currentList = checkForList();
        allLists[currentList].push(toDo(titleInput.value, descriptionInput.value, 
            dueDateInput.value, priorityInput.checked, listMenu.value));
        newToDoForm.style.display = 'none';
        newToDoButton.style.display = 'flex';
        newListButton.style.display = 'flex';
        displayToDo();
        console.log(currentList);
        console.log(allLists);
    }
}

export default createToDo;