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
      editing: false,
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
    } else {
      let li = document.getElementById(`${item.id}`);
      li.style.display = "";
    }
  });
};

const clearAll = () => {
  items.forEach((item) => {
    if (item.done) {
      item.deleted = true;
    }
    if (item.deleted) {
      let li = document.getElementById(`${item.id}`);
      li.style.display = "none";
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
    // if (item.editing) {
    //   let deleteButton = document.getElementById(`delete-${item.id}`);
    //   deleteButton.style.display = 'none';
    //   let saveButton = document.getElementById(`save-${item.id}`);
    //   saveButton.style.display = 'inline';
    // }

    li.innerHTML = `<button type="button" onclick="done(${item.id})" id="done-${item.id}">
      Done
    </button>
    <input type="text" value="${item.text}" id="text-${item.id}" onclick="displaySave(${item.id})">
    <button type="button" onclick="remove(${item.id})" id="delete-${item.id}">
      Delete
    </button>
    <button type="button" class="save" onclick="save(${item.id})" id="save-${item.id}">
      Save
    </button>`;
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

const displaySave = (idNum) => {
  let textContainer = document.getElementById(`text-${idNum}`);
  let saveButton = document.getElementById(`save-${idNum}`);
  saveButton.style.display = "inline";
  let deleteButton = document.getElementById(`delete-${idNum}`);
  deleteButton.style.display = "none";
  saveButton.addEventListener("mousedown", () => {
    if (textContainer.value) {
      save(textContainer.value, idNum);
    } else {
      alert("Please write something!");
    }
  });
  textContainer.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      if (textContainer.value) {
        save(textContainer.value, idNum);
        textContainer.blur();
      } else {
        alert("Please write something!");
      }
    }
  });
  textContainer.addEventListener('focusout', () => {
    saveButton.style.display = 'none';
    deleteButton.style.display = 'inline';
    let originalText = items.filter((i) => {
      return i.id === idNum;
  })
    textContainer.value = originalText[0].text;
});
}

const save = (text, idNum) => {
  let saveButton = document.getElementById(`save-${idNum}`);
  let deleteButton = document.getElementById(`delete-${idNum}`);
  saveButton.style.display = "none";
  deleteButton.style.display = "inline";
  let savedItem = items.filter((i) => {
    return i.id === idNum;
})
  savedItem[0].text = text;
};

// Add event listeners
addButton.addEventListener("click", create);
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    create();
  }
});
