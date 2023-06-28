// Save to dos to local storage.
function savetoStorage(toDoVar, toDoName) {
    localStorage.setItem(`${toDoName}ToDo`, JSON.stringify(toDoVar));
}

// Check storage.
function checkStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
}

// Clear storage.
function clearStorage() {
    localStorage.clear();
}

// clearStorage();

export { savetoStorage, checkStorage };