let toDoList = [];
let input = prompt("Add a new task");

while (input.toLowerCase() !== "q") {
  if (input.toLowerCase() === "list") {
    console.log("***********************************");
    console.log("Here is your to-do list:");
    for (let toDo of toDoList) {
      console.log(`${toDoList.indexOf(toDo)}: ${toDo}`);
    }
    console.log("***********************************");
  } else if (input.toLowerCase() === "delete") {
    let indexDelete = parseInt(
      prompt(
        "input the right index number of the to-do that you want to delete..."
      )
    );
    toDoList.splice(indexDelete, 1);
  } else {
    toDoList.push(input);
  }
  input = prompt("add new task");
}

console.log("Thank you for using my console to-do list app.");
