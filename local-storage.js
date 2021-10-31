let LIST = [];
const STORED_ARRAY = [JSON.parse(localStorage.getItem("todo-list"))];
const INPUT = document.getElementById("input-text");
const FORM = document.getElementById("form");
const TODO_LIST = document.getElementById("todo-list");
FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  create();
});

// Loading the list from previous session by accessing all items of array nested in STORED_ARRAY
const load = () => {
  if (!LIST.length && STORED_ARRAY) {
    STORED_ARRAY.forEach((item) => {
      if (item) {
        item.forEach((i) => LIST.push(i));
      }
    });
  }
};

// Creating items and giving them properties. Calling load function if no previous values
const create = () => {
  if (INPUT.value) {
    const item = {
      text: `${INPUT.value}`,
      id: Math.floor(Math.random() * 1000000000),
      done: false,
    };
    store(item);
    INPUT.value = "";
    read();
  } else {
    alert("Please write something!");
  }
};

// Saving the value in local array + local browser storage
const store = (item) => {
  LIST.unshift(item);
  localStorage.setItem(`todo-list`, JSON.stringify(LIST));
};

// Displaying content on the screen. Making sure it is loaded from previous session first
const read = () => {
  load();
  TODO_LIST.innerHTML = "";
  // Function to iterate over list and create list items
  LIST.forEach((item) => {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    const span = document.createElement("span");
    if (item.done) {
      span.setAttribute("class", "checked");
    }
    const doneButton = document.createElement("button");
    doneButton.innerHTML = "Done";
    doneButton.setAttribute("id", `done-${item.id}`);
    doneButton.addEventListener("click", () => {
      done(item.id);
    });
    span.innerHTML = item.text;
    deleteButton.innerHTML = "Delete";
    deleteButton.setAttribute("id", `delete-${item.id}`);
    deleteButton.addEventListener("click", () => {
      remove(item.id);
    });
    li.appendChild(doneButton);
    li.appendChild(span);
    li.appendChild(deleteButton);
    TODO_LIST.appendChild(li);
  });
};

const remove = (id) => {
  // Filtering element out of local list
  LIST = LIST.filter((item) => {
    return item.id != id;
  });
  localStorage.setItem(`todo-list`, JSON.stringify(LIST));
  read();
};

const done = (id) => {
  LIST.forEach((item) => {
    if (item.id === id) {
      item.done = !item.done;
    }
  });
  localStorage.setItem(`todo-list`, JSON.stringify(LIST));
  read();
};

// Deleting all items by resetting list array. Asking user for confirmation
const deleteAll = () => {
  if (LIST.length && confirm("Are you sure you want to delete all items")) {
    INPUT.value = "";
    LIST = [];
    localStorage.setItem(`todo-list`, JSON.stringify(LIST));
    read();
  }
};

// TO-DO
const clearDone = () => {
  LIST = LIST.filter((item) => {
    if (!item.done) {
      return item;
    }
  });
  localStorage.setItem(`todo-list`, JSON.stringify(LIST));
  read();
};

// Loading previous session and reading list on initialization
read();
