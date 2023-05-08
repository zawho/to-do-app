import { newToDoButton, newToDoForm } from "./ui";

function openToDoForm() {
    newToDoForm.reset();
    newToDoButton.style.display = 'none';
    newToDoForm.style.display = 'flex';
    newToDoForm.style.flexDirection = 'column';
    newToDoForm.style.alignItems = 'flex-start';
    newToDoForm.style.gap = '10px';
}

function cancelToDoForm() {
    newToDoButton.style.display = 'flex';
    newToDoForm.style.display = 'none';
}

export { openToDoForm, cancelToDoForm };