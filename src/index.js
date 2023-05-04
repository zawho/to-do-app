import toDo from "./to-do-factory";
import { createUI, newToDoButton } from "./ui";

createUI();

// Default list.
const defaultList = [];

function test() {
    defaultList.push(toDo);
    console.log(defaultList);
}
newToDoButton.addEventListener('click', test);