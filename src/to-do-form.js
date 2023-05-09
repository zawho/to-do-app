import { newToDoButton, newListButton, newToDoForm } from "./ui";

function openToDoForm() {
    newToDoForm.reset();
    newToDoButton.style.display = 'none';
    newListButton.style.display = 'none';
    newToDoForm.style.display = 'flex';
    newToDoForm.style.flexDirection = 'column';
    newToDoForm.style.alignItems = 'flex-start';
    newToDoForm.style.gap = '10px';
}

function cancelToDoForm() {
    newToDoButton.style.display = 'flex';
    newListButton.style.display = 'flex';
    newToDoForm.style.display = 'none';
}

export { openToDoForm, cancelToDoForm };