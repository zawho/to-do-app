// Save to dos to local storage.
function savetoStorage(toDoVar) {
    localStorage.setItem('todo', JSON.stringify(toDoVar));
}

// Check storage.
function checkStorage() {
    const foo = localStorage.getItem('todo');
    console.log(JSON.parse(foo));
}

export { savetoStorage, checkStorage };