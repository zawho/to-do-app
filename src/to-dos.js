import format from 'date-fns/format';
import isPast from 'date-fns/isPast';
import isToday from 'date-fns/isToday';
import isTomorrow from 'date-fns/isTomorrow';
import isYesterday from 'date-fns/isYesterday';
import parseISO from 'date-fns/parseISO';
import { newToDoButton, newListButton, newToDoForm, titleInput, descriptionInput, 
    dueDateInput, priorityInput, listMenu, projectDiv } from './ui';
import { allLists, checkListMenu, checkCurrentList } from './lists';
import { savetoStorage, getStorage } from './storage';

getStorage(allLists);


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

// Helper function sets date display for to do creation and editing.
function setDateDisplay(dateValue, displayType, pastVar) {
    const x = pastVar;
    let dateDisplay;
    const parsedDate = parseISO(dateValue);
    if (displayType === 'expanded') {
        dateDisplay = format(new Date(dateValue),'EEEE, MMMM d, yyyy');
    } else if (displayType === 'display') {
        dateDisplay = format(new Date(dateValue),'E, MMM d, yyyy');
    }
    if (isPast(parsedDate) === true) {
        x.style.color = 'red';
    } else {
        x.style.color = 'black'; 
    }
    if (isToday(parsedDate) === true) {
        dateDisplay = 'Today';
    }
    if (isTomorrow(parsedDate) === true) {
        dateDisplay = 'Tomorrow';
    }
    if (isYesterday(parsedDate) === true) {
        dateDisplay = 'Yesterday';
    }
    return dateDisplay;
}

// Confirm edit.
function confirmEdit(event, a, b, c, d, e, f, g, h, j) {
    preventPropagation(event);
    const editedToDo = a;
    const editedTitle = b;
    const editedDescription = c;
    const editedDate = d;
    const editedPriority = e;
    const editedTitleLabel = f;
    const editedDescriptionLabel = g;
    const editedPriorityLabel = h;
    const editedList = j;
    const selectedListEdit = checkListMenu(editedList);
    const editedID = editedTitle.id.replace('-edit', '');
    const currentList = checkCurrentList();
    const projectArr = Array.from(projectDiv.childNodes);
    const toDoArr = Array.from(editedToDo.previousSibling.childNodes);
    const expandedToDoArr = Array.from(editedToDo.childNodes);
    const expandedDateDisplayVar = 'expanded';
    const dateDisplayVar = 'display';
    for (let i = 0; i < projectArr.length; i++) {
        if (!(projectArr[i].className.includes('-expanded')) &&
           !(projectArr[i].className === selectedListEdit) && projectArr[i].id === editedID) {
            projectArr[i].className = selectedListEdit;
            projectArr[i].style.display = 'none';
        }
        if (projectArr[i].className.includes('-expanded') && 
           !(projectArr[i].className.replace('-expanded', '') === selectedListEdit) &&
           projectArr[i].id === `${editedID}-expanded`) {
            projectArr[i].className = `${selectedListEdit}-expanded`;
            projectArr[i].style.display = 'none';
        }
        if (projectArr[i].id === editedID) {
            projectArr[i].id = editedTitle.value;
        }
        if (projectArr[i].id === `${editedID}-expanded`) {
            projectArr[i].id = `${editedTitle.value}-expanded`;
        }
    }
    for (let i = 0; i < allLists[currentList].length; i++) {
        if (allLists[currentList][i].title === editedID) {
            allLists[currentList][i].title = editedTitle.value;
            allLists[currentList][i].description = editedDescription.value.
            replaceAll('\n', ' ');
            allLists[currentList][i].dueDate = editedDate.value;
            allLists[currentList][i].priority = editedPriority.checked;
            allLists[currentList][i].list = selectedListEdit;
        }
        if (!(allLists[currentList][i].list === currentList)) {
            allLists[selectedListEdit].push(allLists[currentList][i]);
            allLists[currentList].splice(i, 1);
        }
    }
    for (let i = 0; i < toDoArr.length; i++) {
        if (toDoArr[i].className === 'title-div') {
            toDoArr[i].innerText = editedTitle.value;
        }
        if (toDoArr[i].className === 'description-div') {
            if (editedDescription.value === '') {
                toDoArr[i].innerText = 'no description';
            } else {
                toDoArr[i].innerText = editedDescription.value;
            }
        }
        if (toDoArr[i].className === 'date-div') {
            if (editedDate.value === '') {
                toDoArr[i].innerText = 'no due date';
            } else {
                toDoArr[i].innerText = setDateDisplay(editedDate.value, 
                    expandedDateDisplayVar, toDoArr[i]);
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
    for (let i = 0; i < expandedToDoArr.length; i++) {
        if (expandedToDoArr[i].className === 'done-button') {
            expandedToDoArr[i].remove();
        }
        if (expandedToDoArr[i].className === 'cancel-edit-button') {
            expandedToDoArr[i].remove();
        }
        if (expandedToDoArr[i].className === 'edit-button') {
            expandedToDoArr[i].style.display = 'flex';
        }
        if (expandedToDoArr[i].className === 'delete-button') {
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
                expandedToDoArr[i].innerText = setDateDisplay(editedDate.value, 
                    dateDisplayVar, expandedToDoArr[i]);
            }
            editedDate.remove();
        }
        if (expandedToDoArr[i].className === 'priority-div') {
            if (editedPriority.checked) {
                expandedToDoArr[i].innerText = 'important';
            } else {
                expandedToDoArr[i].innerText = '';
            }
            editedPriority.remove();
            editedPriorityLabel.remove();
        }
        if (expandedToDoArr[i].className === 'list-div') {
            expandedToDoArr[i].remove();
        }
    }
    savetoStorage(allLists);
}

// Cancel edit and close editor.
function cancelEdit(event, a, b, c, d, e, f, g, h) {
    preventPropagation(event);
    const editedToDo = a;
    const editedTitle = b;
    const editedDescription = c;
    const editedDate = d;
    const editedPriority = e;
    const editedTitleLabel = f;
    const editedDescriptionLabel = g;
    const editedPriorityLabel = h;
    const toDoArr = Array.from(editedToDo.previousSibling.childNodes);
    let toDoTitle;
    let toDoDescription;
    let toDoDate;
    let toDoPriority;
    const expandedToDoArr = Array.from(editedToDo.childNodes);
    for (let i = 0; i < toDoArr.length; i++) {
        if (toDoArr[i].className === 'title-div') {
            toDoTitle = toDoArr[i].innerText;
        }
        if (toDoArr[i].className === 'description-div') {
            toDoDescription = toDoArr[i].innerText;
        }
        if (toDoArr[i].className === 'date-div') {
            toDoDate = toDoArr[i].textContent;
        }
        if (toDoArr[i].className === 'priority-div') {
            toDoPriority = toDoArr[i].textContent;
        } 
    }
    for (let i = 0; i < expandedToDoArr.length; i++) {
        if (expandedToDoArr[i].className === 'done-button') {
            expandedToDoArr[i].remove();
        }
        if (expandedToDoArr[i].className === 'cancel-edit-button') {
            expandedToDoArr[i].remove();
        }
        if (expandedToDoArr[i].className === 'edit-button') {
            expandedToDoArr[i].style.display = 'flex';
        }
        if (expandedToDoArr[i].className === 'delete-button') {
            expandedToDoArr[i].style.display = 'flex';
        }
        if (expandedToDoArr[i].className === 'title-div') {
            expandedToDoArr[i].innerText = toDoTitle;
            editedTitleLabel.remove();
            editedTitle.remove();
        }
        if (expandedToDoArr[i].className === 'description-div') {
            expandedToDoArr[i].innerText = toDoDescription;
            editedDescriptionLabel.remove();
            editedDescription.remove();
        }
        if (expandedToDoArr[i].className === 'date-div') {
            expandedToDoArr[i].innerText = toDoDate;
            editedDate.remove();
        }
        if (expandedToDoArr[i].className === 'priority-div') {
            expandedToDoArr[i].innerText = toDoPriority;
            editedPriority.remove();
            editedPriorityLabel.remove();
        }
        if (expandedToDoArr[i].className === 'list-div') {
            expandedToDoArr[i].remove();
        }
    }
}

// Display correct list in editor list menu.
function displaySelectedList(listMenuVar) {
    const currentList = checkCurrentList();
    const listMenuArr = Array.from(listMenuVar);
    for (let i = 0; i < listMenuArr.length; i++) {
        if (listMenuArr[i].innerText === currentList) {
            listMenuArr[i].selected = true;
        }
    }
}

// Helper function returns due date value of selected to do object.
function getToDoDate(toDoTitleVar) {
    let toDoDate = '';
    const currentList = checkCurrentList();
    for (let i = 0; i < allLists[currentList].length; i++) {
        if (allLists[currentList][i].title === toDoTitleVar) {
            toDoDate = allLists[currentList][i].dueDate;
        }
    }
    return toDoDate;
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
    const priorityEditLabel = document.createElement('div');
    const listEditDiv = document.createElement('div');
    const listEditLabel = document.createElement('div');
    const listMenuEdit = listMenu.cloneNode(true);
    const doneButton = document.createElement('button');
    const cancelEditButton = document.createElement('button');
    const toDoTitle = toDoEdit.id.replace('-expanded', '');
    titleEdit.type = 'text';
    descriptionEdit.style.resize = 'none';
    descriptionEdit.cols = '20';
    descriptionEdit.rows = '5';
    dateEdit.type = 'date';
    priorityEdit.type = 'checkbox';
    listEditDiv.className = 'list-div';
    listEditLabel.innerText = 'list';
    listMenuEdit.id = `${toDoEdit.id.replace('-expanded', '')}-list-select`.
    replaceAll(' ', '-');
    doneButton.className = 'done-button';
    doneButton.innerText = 'done';
    doneButton.style.alignSelf = 'flex-end';
    cancelEditButton.className = 'cancel-edit-button';
    cancelEditButton.innerText = 'cancel';
    cancelEditButton.style.alignSelf = 'flex-end';
    const toDoArr = Array.from(toDoEdit.childNodes);
    for (let i = 0; i < toDoArr.length; i++) {
        if (toDoArr[i].className === 'edit-button') {
            toDoArr[i].style.display = 'none';
        }
        if (toDoArr[i].className === 'delete-button') {
            toDoArr[i].style.display = 'none';
        }
        if (toDoArr[i].className === 'title-div') {
            titleEdit.addEventListener('click', preventPropagation);
            titleEdit.value = toDoArr[i].innerText;
            titleEdit.id = `${toDoEdit.id}-edit`.replaceAll(' ', '-')
            .replace('-expanded', '');
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
                dateEdit.value = getToDoDate(toDoTitle);
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
            toDoArr[i].style.display = 'flex';
            toDoArr[i].style.gap = '5px';
            toDoArr[i].innerText = '';
            priorityEditLabel.id = `${priorityEdit.id}-label`;
            priorityEditLabel.innerText = 'important';
            toDoArr[i].appendChild(priorityEdit);
            toDoArr[i].appendChild(priorityEditLabel);
        }
    }
    displaySelectedList(listMenuEdit);
    listMenuEdit.addEventListener('click', preventPropagation);
    listEditDiv.appendChild(listEditLabel);
    listEditDiv.appendChild(listMenuEdit);
    toDoEdit.appendChild(listEditDiv);
    toDoEdit.appendChild(doneButton);
    toDoEdit.appendChild(cancelEditButton);
    doneButton.addEventListener('click', (eventTwo) => confirmEdit(eventTwo, toDoEdit,
         titleEdit, descriptionEdit, dateEdit, priorityEdit, titleEditLabel, 
         descriptionEditLabel, priorityEditLabel, listMenuEdit));
    cancelEditButton.addEventListener('click', (eventThree) => cancelEdit(eventThree, 
        toDoEdit, titleEdit, descriptionEdit, dateEdit, priorityEdit, titleEditLabel, 
        descriptionEditLabel, priorityEditLabel));
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

// Delete to do.
function deleteToDo(event) {
    preventPropagation(event);
    const currentList = checkCurrentList();
    const currentToDo = this.parentNode;
    const currentToDoID = this.parentNode.id.replace('-expanded', '').replaceAll('-', ' ');
    for (let i = 0; i < allLists[currentList].length; i++) {
        if (allLists[currentList][i].title === currentToDoID) {
            allLists[currentList].splice(i, 1);
        }
    }
    currentToDo.previousSibling.remove();
    currentToDo.remove();
    savetoStorage(allLists);
}

// Create expanded to do.
function createExpandedToDo(currentList) {
    const expandedToDoDiv = document.createElement('div');
    const expandedTitle = document.createElement('div');
    const expandedDescription = document.createElement('div');
    const expandedDueDate = document.createElement('div');
    const expandedPriority = document.createElement('div');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    const expandedDateDisplayVar = 'expanded';
    expandedToDoDiv.className = `${listMenu.value}-expanded`.replaceAll(' ', '-');
    expandedToDoDiv.style.display = 'flex';
    expandedToDoDiv.style.flexDirection = 'column';
    expandedToDoDiv.style.gap = '10px';
    expandedToDoDiv.style.padding = '5px';
    editButton.innerText = 'edit';
    editButton.className = 'edit-button';
    editButton.style.alignSelf = 'flex-end';
    deleteButton.innerText = 'delete';
    deleteButton.className = 'delete-button';
    deleteButton.style.alignSelf = 'flex-end';
    expandedToDoDiv.style.display = 'none';
    for (let i = 0; i < allLists[currentList].length; i++) {
        expandedToDoDiv.id = `${i}-${allLists[currentList][allLists[currentList].length - 1]
            .title}-expanded`.replaceAll(' ', '-');
        if (allLists[currentList][i].dueDate === '') {
            expandedDueDate.innerText = 'no due date';
        } else {
                expandedDueDate.innerText = setDateDisplay(allLists[currentList][i].
                    dueDate, expandedDateDisplayVar, expandedDueDate);
        }
    }
    helpToDo(currentList, expandedToDoDiv, expandedTitle, expandedDueDate, expandedPriority, 
        expandedDescription);
    expandedToDoDiv.appendChild(editButton);
    expandedToDoDiv.appendChild(deleteButton);
    editButton.addEventListener('click', (event) => openEditor(event, expandedToDoDiv));
    deleteButton.addEventListener('click', deleteToDo);
}

// Display to do.
function displayToDo(currentList) {
    const toDoDisplay = document.createElement('div');
    const displayTitle = document.createElement('div');
    const displayDescription = document.createElement('div');
    const displayDueDate = document.createElement('div');
    const displayPriority = document.createElement('div');
    const dateDisplayVar = 'display';
    toDoDisplay.className = `${listMenu.value}`.replaceAll(' ', '-');
    toDoDisplay.style.display = 'flex';
    toDoDisplay.style.justifyContent = 'space-between';
    toDoDisplay.style.gap = '10px';
    toDoDisplay.style.padding = '5px';
    displayDescription.style.display = 'none';
    for (let i = 0; i < allLists[currentList].length; i++) {
        toDoDisplay.id = `${i}-${allLists[currentList][allLists[currentList].length - 1].title}`
        .replaceAll(' ', '-');
        if (allLists[currentList][i].dueDate === '') {
            displayDueDate.innerText = 'no due date';
        } else {
            displayDueDate.innerText = setDateDisplay(allLists[currentList][i].dueDate,
                 dateDisplayVar, displayDueDate);
        }
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
        const selectedList = checkListMenu(listMenu);
        const newToDo = toDo(titleInput.value, 
            descriptionInput.value.replaceAll('\n', ' '), 
            dueDateInput.value, 
            priorityInput.checked, listMenu.value)
        allLists[selectedList].push(newToDo);
        newToDoForm.style.display = 'none';
        newToDoButton.style.display = 'flex';
        newListButton.style.display = 'flex';
        displayToDo(selectedList);
        createExpandedToDo(selectedList);
        savetoStorage(allLists);
    }
}

function loadDisplay(currentList) {
    for (let i = 0; i < allLists[currentList].length; i++) {
        const toDoDisplay = document.createElement('div');
        const displayTitle = document.createElement('div');
        const displayDescription = document.createElement('div');
        const displayDueDate = document.createElement('div');
        const displayPriority = document.createElement('div');
        const dateDisplayVar = 'display';
        displayTitle.className = 'title-div';
        displayDueDate.className = 'date-div';
        displayPriority.className = 'priority-div';
        displayDescription.className = 'description-div';
        toDoDisplay.className = `${allLists[currentList][i].list}`.replaceAll(' ', '-');
        toDoDisplay.style.display = 'flex';
        toDoDisplay.style.justifyContent = 'space-between';
        toDoDisplay.style.gap = '10px';
        toDoDisplay.style.padding = '5px';
        displayDescription.style.display = 'none';
        toDoDisplay.id = `${allLists[currentList][i].title}`.replaceAll(' ', '-');
        displayTitle.innerText = allLists[currentList][i].title;
        if (allLists[currentList][i].description === '') {
            displayDescription.innerText = 'no description';
        } else {
            displayDescription.innerText = allLists[currentList][i]
            .description;
        }
        if (allLists[currentList][i].dueDate === '') {
            displayDueDate.innerText = 'no due date';
        } else {
            displayDueDate.innerText = setDateDisplay(allLists[currentList][i].dueDate,
                 dateDisplayVar, displayDueDate);
        }
        if (allLists[currentList][i].priority === true) {
            displayPriority.innerText = 'important';
        } else {
            displayPriority.innerText = '';
        }
        if (projectDiv.id === currentList) {
            toDoDisplay.style.display = 'flex';
        } else {
            toDoDisplay.style.display = 'none';
        }
        projectDiv.appendChild(toDoDisplay);
        toDoDisplay.appendChild(displayTitle);
        toDoDisplay.appendChild(displayDescription);
        toDoDisplay.appendChild(displayDueDate);
        toDoDisplay.appendChild(displayPriority);
        toDoDisplay.addEventListener('click', expandToDo);
    }
}

function loadExpandedDisplay(currentList) {
    for (let i = 0; i < allLists[currentList].length; i++) {
        const expandedToDoDiv = document.createElement('div');
        const expandedTitle = document.createElement('div');
        const expandedDescription = document.createElement('div');
        const expandedDueDate = document.createElement('div');
        const expandedPriority = document.createElement('div');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');
        const expandedDateDisplayVar = 'expanded';
        expandedTitle.className = 'title-div';
        expandedDueDate.className = 'date-div';
        expandedPriority.className = 'priority-div';
        expandedDescription.className = 'description-div';
        expandedToDoDiv.className = `${allLists[currentList][i].list}-expanded`.replaceAll(' ', '-');
        expandedToDoDiv.style.display = 'flex';
        expandedToDoDiv.style.flexDirection = 'column';
        expandedToDoDiv.style.gap = '10px';
        expandedToDoDiv.style.padding = '5px';
        editButton.innerText = 'edit';
        editButton.className = 'edit-button';
        editButton.style.alignSelf = 'flex-end';
        deleteButton.innerText = 'delete';
        deleteButton.className = 'delete-button';
        deleteButton.style.alignSelf = 'flex-end';
        expandedToDoDiv.style.display = 'none';
        expandedToDoDiv.id = `${allLists[currentList][i]
        .title}-expanded`.replaceAll(' ', '-');
        expandedTitle.innerText = allLists[currentList][i].title;
        if (allLists[currentList][i].description === '') {
            expandedDescription.innerText = 'no description';
        } else {
            expandedDescription.innerText = allLists[currentList][i]
            .description;
        }
        if (allLists[currentList][i].dueDate === '') {
            expandedDueDate.innerText = 'no due date';
        } else {
            expandedDueDate.innerText = setDateDisplay(allLists[currentList][i].
            dueDate, expandedDateDisplayVar, expandedDueDate);
        }
        if (allLists[currentList][i].priority === true) {
            expandedPriority.innerText = 'important';
        } else {
            expandedPriority.innerText = '';
        }
        projectDiv.appendChild(expandedToDoDiv);
        expandedToDoDiv.appendChild(expandedTitle);
        expandedToDoDiv.appendChild(expandedDescription);
        expandedToDoDiv.appendChild(expandedDueDate);
        expandedToDoDiv.appendChild(expandedPriority);
        expandedToDoDiv.appendChild(editButton);
        expandedToDoDiv.appendChild(deleteButton);
        expandedToDoDiv.before(projectDiv.firstChild);
        editButton.addEventListener('click', (event) => openEditor(event, expandedToDoDiv));
        deleteButton.addEventListener('click', deleteToDo);
        expandedToDoDiv.addEventListener('click', expandToDo);
    }
}

function loadAllToDos() {
    const allListsArr = Object.keys(allLists);
    for (let i = 0; i < allListsArr.length; i++) {
        loadDisplay(allListsArr[i]);
    }
    for (let i = 0; i < allListsArr.length; i++) {
        loadExpandedDisplay(allListsArr[i]);
    }
}

loadAllToDos();

export default createToDo;