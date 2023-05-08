const newToDoForm = document.querySelector('.new-to-do-form');
const titleInput = document.querySelector('.title-input');

function openToDoForm() {
    if (!(titleInput.value === '')) {
        titleInput.value = ''
    }
    newToDoForm.style.display = 'flex';
}

export default openToDoForm;