let items = [];
let addButton = document.getElementById("add");
let input = document.getElementById("input-text");
let todoList = document.getElementById("to-do-list");

const create = () => {
  if (input.value) {
    listItem = {
      text: `${input.value}`,
      id: Math.floor(Math.random() * 100000000),
      done: false,
      deleted: false,
    };
    items.unshift(listItem);
    input.value = "";
  } else {
    alert("Please write something!");
  }
  read();
};

const remove = (idNum) => {
  let removedItem = items.filter((i) => {
    return i.id === idNum;
  });

  if (removedItem[0].id === idNum) {
    removedItem[0].deleted = !removedItem[0].deleted;
  }
  items.forEach((item) => {
    if (item.deleted) {
      let li = document.getElementById(`${item.id}`);
      li.style.display = "none";
      // items.pop(item);
    } else {
      let li = document.getElementById(`${item.id}`);
      li.style.display = "";
    }
  });
};

const read = () => {
  todoList.innerHTML = "";
  items.forEach((item) => {
    let li = document.createElement("li");
    todoList.appendChild(li);
    li.setAttribute("id", `${item.id}`);
    if (item.done) {
      li.setAttribute("style", "color: green");
    }
    if (item.deleted) {
      li.setAttribute("style", "display: none");
    }
    li.innerHTML = `<button type="button" onclick="done(${item.id})" id="done-${item.id}">Done</button><span id="text-${item.id}">${item.text}</span><button type="button" onclick="remove(${item.id})" id="delete-${item.id}">Delete</button>`;
  });
};

// Function triggered when clicking 'done'.
// Selects object in array based on id and changes their style property in DOM
const done = (idNum) => {
  let doneItem = items.filter((i) => {
    return i.id === idNum;
  });
  if (doneItem[0].id === idNum) {
    doneItem[0].done = !doneItem[0].done;
  }
  items.forEach((item) => {
    if (item.done && !item.deleted) {
      let li = document.getElementById(`${item.id}`);
      li.style.color = "green";
    } else if (!item.deleted) {
      let li = document.getElementById(`${item.id}`);
      li.style.color = "";
    }
  });
};

// Add event listeners
addButton.addEventListener("click", create);
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    create();
  }
});
