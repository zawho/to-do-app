import { newToDoButton, newToDoForm, titleInput, descriptionInput, dueDateInput, priorityInput, projectDiv } from "./ui";
import defaultList from "./projects";

// To do factory function.
const toDo = (title, description, dueDate, priority) => ({
    title, description, dueDate, priority});


// Display project.
function displayToDo() {
    const toDoDisplay = document.createElement('div');
    const displayTitle = document.createElement('div');
    toDoDisplay.className = 'to-do-display';
    for (let i = 0; i < defaultList.length; i++) {
        displayTitle.innerText = defaultList[defaultList.length - 1].title;
        projectDiv.appendChild(toDoDisplay);
        toDoDisplay.appendChild(displayTitle);
    }
}

function createToDo(e) {
    if (!(titleInput.value === '')) {
        e.preventDefault();
        defaultList.push(toDo(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.checked));
        newToDoForm.style.display = 'none';
        newToDoButton.style.display = 'flex';
        displayToDo();
        console.log(defaultList);
    }
}

export default createToDo;