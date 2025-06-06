function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  taskSpan.onclick = () => taskSpan.parentElement.classList.toggle("completed");

  const actionsDiv = document.createElement("div");
  actionsDiv.className = "actions";

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit";
  editBtn.onclick = () => editTask(taskSpan);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => li.remove();

  actionsDiv.appendChild(editBtn);
  actionsDiv.appendChild(deleteBtn);

  li.appendChild(taskSpan);
  li.appendChild(actionsDiv);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function editTask(taskSpan) {
  const newTask = prompt("Edit your task:", taskSpan.textContent);
  if (newTask !== null && newTask.trim() !== "") {
    taskSpan.textContent = newTask;
  }
}
