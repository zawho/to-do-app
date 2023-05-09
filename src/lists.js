// List object.
const allLists = {
    defaultList: [],
}

// Create new list.
function createList(listName) {
    allLists[listName] = [];
    console.log(allLists);
}


export { allLists, createList };