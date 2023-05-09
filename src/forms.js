import { newToDoButton, newListButton, newToDoForm, newListForm } from "./ui";

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

function openListForm() {
    newListForm.reset();
    newToDoButton.style.display = 'none';
    newListButton.style.display = 'none';
    newListForm.style.display = 'flex';
    newListForm.style.display = 'flex';
    newListForm.style.flexDirection = 'column';
    newListForm.style.alignItems = 'flex-start';
    newListForm.style.gap = '10px';
}

function cancelListForm() {
    newToDoButton.style.display = 'flex';
    newListButton.style.display = 'flex';
    newListForm.style.display = 'none';
}

export { openToDoForm, cancelToDoForm, openListForm, cancelListForm };