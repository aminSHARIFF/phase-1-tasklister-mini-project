document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const task = event.target["new-task-description"].value;

    buildToDo(task);

    form.reset();
  });
});

function buildToDo(task) {
  const li = document.createElement("li");
  li.textContent = task;

  const list = document.querySelector("#tasks");
  list.append(li);
}
