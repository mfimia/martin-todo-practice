const LIST = []
const INPUT = document.getElementById("input-text");
const FORM = document.getElementById("form");
FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  create();
});

const create = () => {
  const item = {
    text: `${INPUT.value}`,
    id: Math.floor(Math.random() * 1000000000),
  };
  LIST.unshift(item);
  localStorage.setItem(`todo-list`, JSON.stringify(LIST));
  // const obj = JSON.parse(localStorage.getItem(`${item.id}`));
  INPUT.value = "";
    console.log(JSON.parse(localStorage.getItem("todo-list")));
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
