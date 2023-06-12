import { newToDoButton, newListButton, newToDoForm, titleInput, descriptionInput, 
    dueDateInput, priorityInput, listMenu, projectDiv } from "./ui";
import { allLists, checkForList } from "./lists";

// To do factory function.
const toDo = (title, description, dueDate, priority, list) => ({
    title, description, dueDate, priority, list});

// Expand to do.
function expandToDo() {
    if (!(this.id.includes('-expanded')) && this.style.display === 'flex') {
        this.style.display = 'none';
        this.nextSibling.style.display = 'flex';
    }
    if (this.id.includes('-expanded') && this.style.display === 'flex') {
        this.style.display = 'none';
        this.previousSibling.style.display = 'flex';
    }
}

// Prevent click event propagation on editable to do.
function preventPropagation(e) {
    e.stopPropagation();
}

// Confirm edit.
function confirmEdit(event, a, b, c, d, e, f, g) {
    preventPropagation(event);
    const editedToDo = a;
    const editedTitle = b;
    const editedDescription = c;
    const editedDate = d;
    const editedPriority = e;
    const editedTitleLabel = f;
    const editedDescriptionLabel = g;
    const editedID = editedTitle.id.replace('-edit', '');
    const projectArr = Array.from(projectDiv.childNodes);
    const toDoArr = Array.from(editedToDo.previousSibling.childNodes)
    const expandedToDoArr = Array.from(editedToDo.childNodes);
    const selectedList = checkForList();
    for (let i = 0; i < projectArr.length; i++) {
        if (projectArr[i].id === editedID) {
            projectArr[i].id = editedTitle.value;
        }
        if (projectArr[i].id === `${editedID}-expanded`) {
            projectArr[i].id = `${editedTitle.value}-expanded`;
        }
    }
    for (let i = 0; i < toDoArr.length; i++) {
        if (toDoArr[i].className === 'title-div') {
            toDoArr[i].innerText = editedTitle.value;
        }
        if (toDoArr[i].className === 'date-div') {
            if (editedDate.value === '') {
                toDoArr[i].innerText = 'no due date';
            } else {
                toDoArr[i].innerText = editedDate.value;
            }
        }
        if (toDoArr[i].className === 'priority-div') {
            if (editedPriority.checked) {
                toDoArr[i].innerText = 'important';
            } else {
                toDoArr[i].innerText = '';
            }
        }
    }
    for (let i = 0; i < allLists[selectedList].length; i++) {
        if (allLists[selectedList][i].title === editedID) {
            allLists[selectedList][i].title = editedTitle.value;
            allLists[selectedList][i].description = editedDescription.value.
            replaceAll('\n', ' ');
            allLists[selectedList][i].dueDate = editedDate.value;
            allLists[selectedList][i].priority = editedPriority.checked;
        }
    }
    for (let i = 0; i < expandedToDoArr.length; i++) {
        if (expandedToDoArr[i].className === 'done-button') {
            expandedToDoArr[i].remove();
        }
        if (expandedToDoArr[i].className === 'edit-button') {
            expandedToDoArr[i].style.display = 'flex';
        }
        if (expandedToDoArr[i].className === 'title-div') {
            expandedToDoArr[i].innerText = editedTitle.value;
            editedTitleLabel.remove();
            editedTitle.remove();
        }
        if (expandedToDoArr[i].className === 'description-div') {
            if (editedDescription.value === '') {
                expandedToDoArr[i].innerText = 'no description';
            } else {
                expandedToDoArr[i].innerText = editedDescription.value;
            }
            editedDescriptionLabel.remove();
            editedDescription.remove();
        }
        if (expandedToDoArr[i].className === 'date-div') {
            if (editedDate.value === '') {
                expandedToDoArr[i].innerText = 'no due date';
            } else {
                expandedToDoArr[i].innerText = editedDate.value;
            }
            editedDate.remove();
        }
        if (expandedToDoArr[i].className === 'priority-div') {
            if (editedPriority.checked) {
                expandedToDoArr[i].innerText = 'important';
            } else {
                expandedToDoArr[i].innerText = '';
            }
            editedDate.remove();
        }
    }
}

// Open to do editor.
function openEditor(event, a) {
    preventPropagation(event);
    const toDoEdit = a;
    const titleEditLabel = document.createElement('div');
    const titleEdit = document.createElement('input');
    const descriptionEditLabel = document.createElement('div');
    const descriptionEdit = document.createElement('textarea');
    const dateEdit = document.createElement('input');
    const priorityEdit = document.createElement('input');
    const doneButton = document.createElement('button');
    titleEdit.type = 'text';
    descriptionEdit.style.resize = 'none';
    descriptionEdit.cols = '20';
    descriptionEdit.rows = '5';
    dateEdit.type = 'date';
    priorityEdit.type = 'checkbox';
    doneButton.className = 'done-button';
    doneButton.innerText = 'done';
    doneButton.style.alignSelf = 'flex-end';
    toDoEdit.appendChild(doneButton);
    const toDoArr = Array.from(toDoEdit.childNodes);
    for (let i = 0; i < toDoArr.length; i++) {
        if (toDoArr[i].className === 'edit-button') {
            toDoArr[i].style.display = 'none';
        }
        if (toDoArr[i].className === 'title-div') {
            titleEdit.addEventListener('click', preventPropagation);
            titleEdit.value = toDoArr[i].innerText;
            titleEdit.id = `${toDoArr[i].innerText}-edit`.replaceAll(' ', '-');
            toDoArr[i].innerText = '';
            titleEditLabel.id = `${titleEdit.id}-label`;
            titleEditLabel.innerText = 'title';
            toDoArr[i].appendChild(titleEditLabel);
            toDoArr[i].appendChild(titleEdit);
        }
        if (toDoArr[i].className === 'description-div') {
            descriptionEdit.addEventListener('click', preventPropagation);
            if (toDoArr[i].innerText === 'no description') {
                descriptionEdit.innerText = '';
            } else {
                descriptionEdit.innerText = toDoArr[i].innerText.replaceAll('\n', ' ');
            }
            descriptionEdit.id = `${toDoEdit.id.replace('-expanded', '')}-description-edit`.
            replaceAll(' ', '-');
            toDoArr[i].innerText = '';
            descriptionEditLabel.id = `${descriptionEdit.id}-label`;
            descriptionEditLabel.innerText = 'description';
            toDoArr[i].appendChild(descriptionEditLabel);
            toDoArr[i].appendChild(descriptionEdit);
        }
        if (toDoArr[i].className === 'date-div') {
            if (!(toDoArr[i].innerText === 'no due date')) {
                dateEdit.value = toDoArr[i].innerText;
            }
            dateEdit.addEventListener('click', preventPropagation);
            dateEdit.id = `${toDoEdit.id.replace('-expanded', '')}-date-edit`.
            replaceAll(' ', '-');
            toDoArr[i].innerText = '';
            toDoArr[i].appendChild(dateEdit);
        }
        if (toDoArr[i].className === 'priority-div') {
            if (toDoArr[i].innerText === 'important') {
                priorityEdit.checked = true;
            }
            priorityEdit.addEventListener('click', preventPropagation);
            priorityEdit.id = `${toDoEdit.id.replace('-expanded', '')}-priority-edit`.
            replaceAll(' ', '-');
            toDoArr[i].innerText = '';
            toDoArr[i].appendChild(priorityEdit);
        }
    }
    doneButton.addEventListener('click', (eventTwo) => confirmEdit(eventTwo, toDoEdit,
         titleEdit, descriptionEdit, dateEdit, priorityEdit, titleEditLabel, 
         descriptionEdit));
}

// Helper function for display to do and create expanded to do.
function helpToDo(listVar, a, b, c, d, e) {
    const toDoVar = a;
    const titleVar = b;
    const dueDateVar = c;
    const priorityVar = d;
    const descriptionVar = e;
    titleVar.className = 'title-div';
    dueDateVar.className = 'date-div';
    priorityVar.className = 'priority-div';
    descriptionVar.className = 'description-div';
    for (let i = 0; i < allLists[listVar].length; i++) {
        titleVar.innerText = allLists[listVar][allLists[listVar].length - 1].title;
        if (allLists[listVar][allLists[listVar].length - 1].dueDate === '') {
            dueDateVar.innerText = 'no due date';
        } else {
            dueDateVar.innerText = allLists[listVar][allLists[listVar].length - 1].dueDate;
        }
        if (allLists[listVar][allLists[listVar].length - 1].description === '') {
            descriptionVar.innerText = 'no description';
        } else {
            descriptionVar.innerText = allLists[listVar][allLists[listVar].length - 1]
            .description;
        }
        projectDiv.appendChild(toDoVar);
        toDoVar.appendChild(titleVar);
        toDoVar.appendChild(descriptionVar);
        toDoVar.appendChild(dueDateVar);
        if (priorityInput.checked) {
            priorityVar.innerText = 'important';
        } else {
            priorityVar.innerText = '';
        }
        toDoVar.appendChild(priorityVar);
        toDoVar.addEventListener('click', expandToDo);
    }
}

// Create expanded to do.
function createExpandedToDo(currentList) {
    const expandedToDoDiv = document.createElement('div');
    const expandedTitle = document.createElement('div');
    const expandedDescription = document.createElement('div');
    const expandedDueDate = document.createElement('div');
    const expandedPriority = document.createElement('div');
    const editButton = document.createElement('button');
    expandedToDoDiv.className = `${listMenu.value}-expanded`.replaceAll(' ', '-');
    expandedToDoDiv.style.display = 'flex';
    expandedToDoDiv.style.flexDirection = 'column';
    expandedToDoDiv.style.gap = '10px';
    expandedToDoDiv.style.padding = '5px';
    editButton.innerText = 'edit';
    editButton.className = 'edit-button';
    editButton.style.alignSelf = 'flex-end';
    expandedToDoDiv.style.display = 'none';
    for (let i = 0; i < allLists[currentList].length; i++) {
        expandedToDoDiv.id = `${allLists[currentList][allLists[currentList].length - 1]
            .title}-expanded`.replaceAll(' ', '-');
    }
    helpToDo(currentList, expandedToDoDiv, expandedTitle, expandedDueDate, expandedPriority, 
        expandedDescription);
    expandedToDoDiv.appendChild(editButton);
    editButton.addEventListener('click', (event) => openEditor(event, expandedToDoDiv));
}

// Display to do.
function displayToDo(currentList) {
    const toDoDisplay = document.createElement('div');
    const displayTitle = document.createElement('div');
    const displayDescription = document.createElement('div');
    const displayDueDate = document.createElement('div');
    const displayPriority = document.createElement('div');
    toDoDisplay.className = `${listMenu.value}`.replaceAll(' ', '-');
    toDoDisplay.style.display = 'flex';
    toDoDisplay.style.justifyContent = 'space-between';
    toDoDisplay.style.gap = '10px';
    toDoDisplay.style.padding = '5px';
    displayDescription.style.display = 'none';
    for (let i = 0; i < allLists[currentList].length; i++) {
        toDoDisplay.id = `${allLists[currentList][allLists[currentList].length - 1].title}`
        .replaceAll(' ', '-');
    }
    helpToDo(currentList, toDoDisplay, displayTitle, displayDueDate, displayPriority, 
        displayDescription);
    if (projectDiv.id === currentList) {
        toDoDisplay.style.display = 'flex';
    } else {
        toDoDisplay.style.display = 'none';
    }
}

// Create to do.
function createToDo(e) {
    if (!(titleInput.value === '')) {
        e.preventDefault();
        const selectedList = checkForList();
        allLists[selectedList].push(toDo(titleInput.value, 
            descriptionInput.value.replaceAll('\n', ' '), 
            dueDateInput.value, 
            priorityInput.checked, listMenu.value));
        newToDoForm.style.display = 'none';
        newToDoButton.style.display = 'flex';
        newListButton.style.display = 'flex';
        displayToDo(selectedList);
        createExpandedToDo(selectedList);
    }
}

export default createToDo;