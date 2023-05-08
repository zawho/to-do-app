import { newToDoButton, newToDoForm, titleInput, descriptionInput, dueDateInput, priorityInput } from "./ui";
import defaultList from "./projects";

// To do factory function.
const toDo = (title, description, dueDate, priority) => ({
    title, description, dueDate, priority});

function createToDo(e) {
    if (!(titleInput.value === '')) {
        e.preventDefault();
        defaultList.push(toDo(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.checked));
        newToDoForm.style.display = 'none';
        newToDoButton.style.display = 'flex';
        console.log(defaultList);
    }
}

export default createToDo;