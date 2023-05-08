const newToDoButton = document.querySelector('.new-to-do-button');
const newToDoForm = document.querySelector('.new-to-do-form');

function openToDoForm() {
    newToDoForm.reset();
    newToDoButton.style.display = 'none';
    newToDoForm.style.display = 'flex';
    newToDoForm.style.flexDirection = 'column';
    newToDoForm.style.alignItems = 'flex-start';
    newToDoForm.style.gap = '10px';
}

export default openToDoForm;