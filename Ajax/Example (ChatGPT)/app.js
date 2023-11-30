document.addEventListener("DOMContentLoaded", function () {
  const taskForm = document.getElementById("taskForm");
  const taskTitleInput = document.getElementById("taskTitle");
  const taskList = document.getElementById("taskList");

  // Event listener for form submission
  taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get task title from input
    const taskTitle = taskTitleInput.value;

    // Make a POST request to create a new task
    axios
      .post("http://127.0.0.1:5000/api/tasks", { title: taskTitle })
      .then((response) => {
        // Update the task list
        displayTasks();
      })
      .catch((error) => {
        console.error("Error creating task:", error);
      });
  });

  // Function to display tasks
  function displayTasks() {
    // Clear the existing task list
    taskList.innerHTML = "";

    // Make a GET request to retrieve all tasks
    axios
      .get("http://127.0.0.1:5000/api/tasks")
      .then((response) => {
        const tasks = response.data.tasks;

        // Add tasks to the task list
        tasks.forEach((task) => {
          const li = document.createElement("li");
          li.textContent = task.title;
          taskList.appendChild(li);
        });
      })
      .catch((error) => {
        console.error("Error retrieving tasks:", error);
      });
  }

  // Initial display of tasks
  displayTasks();
});
