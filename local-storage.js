const INPUT = document.getElementById("input-text");
const FORM = document.getElementById("form");
FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  create();
});

const create = () => {
  const item = {
    text: `${INPUT.value}`,
    id: Math.floor(Math.random() * 1000000000)
  };
  localStorage.setItem(`${item.id}`, JSON.stringify(item));
  const obj = JSON.parse(localStorage.getItem(`${item.id}`));
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
