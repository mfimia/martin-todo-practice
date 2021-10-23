let items = [];
let addButton = document.getElementById("add");
let input = document.getElementById("input-text");
let todoList = document.getElementById('to-do-list');


const create = () => {
  if (input.value) {
      listItem = {
          text: `${input.value}`,
          id: Math.floor(Math.random()*100000000),
          done: false
      }
      items.unshift(listItem);
      input.value = '';
  } else {
    alert("Please write something!");
  }
  read();
};

const read = () => {
    todoList.innerHTML = '';
    items.forEach(item => {
        let li = document.createElement('li');
        todoList.appendChild(li);
       li.innerHTML = `${item.text}`
   })

}

// Add event listeners
addButton.addEventListener("click", create);
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    create();
  }
});
