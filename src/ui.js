
function createUI() {

    const mainContent = document.querySelector('.main-content');

    const newToDoButton = document.createElement('button');
    newToDoButton.className = 'to-do-button';
    newToDoButton.innerText = 'new';
    mainContent.appendChild(newToDoButton);
}

export default createUI;
