let items = [];
let addButton = document.getElementById("add");
let input = document.getElementById("input-text");
let todoList = document.getElementById('to-do-list');


const create = () => {
  if (input.value) {
      items.unshift(input.value);
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
       li.innerHTML = `${item}`
   })

}

// Add event listeners
addButton.addEventListener("click", create);
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    create();
  }
});
