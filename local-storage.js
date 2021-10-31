const LIST = [];
const STORED_ARRAY = [JSON.parse(localStorage.getItem("todo-list"))];
const INPUT = document.getElementById("input-text");
const FORM = document.getElementById("form");
const TODO_LIST = document.getElementById("todo-list");
// const LI = document.createElement('li');
// const LI = document.createElement('li')
FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  create();
});

// Loading the list from previous session by accessing all items of array nested in STORED_ARRAY
const load = () => {
  STORED_ARRAY.forEach((item) => {
    if (item) {
      item.forEach((i) => LIST.push(i));
    }
  });
};

// Creating items and giving them properties. Calling load function if no previous values
const create = () => {
  if (!LIST.length && STORED_ARRAY) {
    load();
  }
  const item = {
    text: `${INPUT.value}`,
    id: Math.floor(Math.random() * 1000000000),
  };
  store(item);
  INPUT.value = "";
  read();
};

// Saving the value in local array + local browser storage
const store = (item) => {
  LIST.unshift(item);
  localStorage.setItem(`todo-list`, JSON.stringify(LIST));
};

const read = () => {
  TODO_LIST.innerHTML = "";
  // Function to iterate over list and create list items
  LIST.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = item.text;
    TODO_LIST.appendChild(li);
  });
};

// Loading previous session and reading list on initialization
load();
read();
