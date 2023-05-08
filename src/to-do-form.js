const newToDoButton = document.querySelector('.new-to-do-button');
const newToDoForm = document.querySelector('.new-to-do-form');
const titleInput = document.querySelector('.title-input');

function openToDoForm() {
    if (!(titleInput.value === '')) {
        titleInput.value = ''
    }
    newToDoButton.style.display = 'none';
    newToDoForm.style.display = 'flex';
    newToDoForm.style.flexDirection = 'column';
    newToDoForm.style.alignItems = 'flex-start';
    newToDoForm.style.gap = '10px';
}

export default openToDoForm;