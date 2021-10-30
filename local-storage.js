const LIST = [];
const STORED_ARRAY = [JSON.parse(localStorage.getItem("todo-list"))];
const INPUT = document.getElementById("input-text");
const FORM = document.getElementById("form");
FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  create();
});

const loadList = () => {
  STORED_ARRAY.forEach((item) => LIST.unshift(item));
};

const create = () => {
  if ((LIST.length = 0)) {
    console.log("hi!");
    loadList();
  }
  const item = {
    text: `${INPUT.value}`,
    id: Math.floor(Math.random() * 1000000000),
  };
  LIST.unshift(item);

  localStorage.setItem(`todo-list`, JSON.stringify(LIST));
  // const obj = JSON.parse(localStorage.getItem(`${item.id}`));
  INPUT.value = "";
  console.log(LIST);
  //   localStorage.setItem()
};

// localStorage.setItem('item', JSON.stringify(ITEM));
// const test = localStorage.getItem('item')
// console.log(test)
// const p = document.createElement('p');
// document.body.appendChild(p);
// p.innerHTML = test
// const parse = JSON.parse(test)
// console.log(parse)
