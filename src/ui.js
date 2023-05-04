const mainContent = document.querySelector('.main-content');
const newToDoButton = document.createElement('button');

function createUI() {
    newToDoButton.className = 'to-do-button';
    newToDoButton.innerText = 'new';
    mainContent.appendChild(newToDoButton);
}

export { createUI, newToDoButton };
