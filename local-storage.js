const INPUT = document.getElementById("input-text");
const FORM = document.getElementById("form");
FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  create();
});

const create = () => {
  const ITEM = {
    text: `${INPUT.value}`,
    id: Math.floor(Math.random() * 1000000000)
  };
  localStorage.setItem(`${ITEM.id}`, JSON.stringify(ITEM));
  const preParse = localStorage.getItem(`${ITEM.id}`);
  const parsed = JSON.parse(preParse);
  console.log(parsed)
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
