import { newToDoButton, newToDoForm, titleInput, descriptionInput, dueDateInput, priorityInput, projectDiv } from "./ui";
import allLists from "./lists";

// To do factory function.
const toDo = (title, description, dueDate, priority) => ({
    title, description, dueDate, priority});


// Display to do in default project.
function displayToDo() {
    const toDoDisplay = document.createElement('div');
    const displayTitle = document.createElement('div');
    const displayDueDate = document.createElement('div');
    const displayPriority = document.createElement('div');
    toDoDisplay.className = 'to-do-display';
    toDoDisplay.style.display = 'flex';
    toDoDisplay.style.gap = '10px';
    for (let i = 0; i < allLists.defaultList.length; i++) {
        displayTitle.innerText = allLists.defaultList[allLists.defaultList.length - 1].title;
        if (allLists.defaultList[allLists.defaultList.length - 1].dueDate === '') {
            displayDueDate.innerText = 'no due date';
        } else {
            displayDueDate.innerText = allLists.defaultList[allLists.defaultList.length - 1].dueDate;
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
        allLists.defaultList.push(toDo(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.checked));
        newToDoForm.style.display = 'none';
        newToDoButton.style.display = 'flex';
        displayToDo();
        console.log(allLists.defaultList);
    }
}

export default createToDo;