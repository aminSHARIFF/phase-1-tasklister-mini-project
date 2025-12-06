document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // Select the form
  const form = document.querySelector("#create-task-form");

  // Add event listener for submit
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent page refresh

    // Gather form data
    const taskInput = event.target["new-task-description"].value;

    // Call buildToDo with the task
    buildToDo(taskInput);

    // Optional: clear form
    form.reset();
  });
});

// Function to build and display the task
function buildToDo(task) {
  const li = document.createElement("li");
  li.textContent = task;

  // Append li to the task list
  document.querySelector("#tasks").appendChild(li);
}
