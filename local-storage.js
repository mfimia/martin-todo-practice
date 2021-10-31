const LIST = [];
const STORED_ARRAY = [JSON.parse(localStorage.getItem("todo-list"))];
const INPUT = document.getElementById("input-text");
const FORM = document.getElementById("form");
FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  create();
});

// Loading the list from previous session by accessing all items of array nested in STORED_ARRAY
const loadList = () => {
  STORED_ARRAY.forEach((item) => {
    if (item) {
      item.forEach((i) => LIST.unshift(i));
    }
  });
};

const create = () => {
  if (!LIST.length && STORED_ARRAY) {
    loadList();
  }
  const item = {
    text: `${INPUT.value}`,
    id: Math.floor(Math.random() * 1000000000),
  };
  store(item);
  INPUT.value = "";
};

// Saving the value in local array + local browser storage
const store = (item) => {
  LIST.unshift(item);
  console.log(LIST);
  localStorage.setItem(`todo-list`, JSON.stringify(LIST));
};

// localStorage.setItem('item', JSON.stringify(ITEM));
// const test = localStorage.getItem('item')
// console.log(test)
// const p = document.createElement('p');
// document.body.appendChild(p);
// p.innerHTML = test
// const parse = JSON.parse(test)
// console.log(parse)
