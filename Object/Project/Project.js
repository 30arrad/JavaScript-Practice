// JavaScript for Task Management
const taskManager = {
    tasks: [],
    addTask: function(taskName, dueDate) {
        const task = {
            id: this.tasks.length + 1,
            name: taskName,
            dueDate: dueDate,
            isCompleted: false,
        };
        this.tasks.push(task);
        this.renderTasks();
    },
    completeTask: function(taskId) {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.isCompleted = true;
            this.renderTasks();
        }
    },
    deleteTask: function(taskId) {
        this.tasks = this.tasks.filter(t => t.id !== taskId);
        this.renderTasks();
    },
    renderTasks: function() {
        const taskList = document.getElementById("task-list");
        taskList.innerHTML = ""; // Clear previous tasks

        this.tasks.forEach(task => {
            const taskDiv = document.createElement("div");
            taskDiv.className = "task" + (task.isCompleted ? " completed" : "");
            taskDiv.innerHTML = `
                <span>${task.name} - Due: ${task.dueDate}</span>
                <div>
                    <button onclick="taskManager.completeTask(${task.id})">Complete</button>
                    <button onclick="taskManager.deleteTask(${task.id})">Delete</button>
                </div>
            `;
            taskList.appendChild(taskDiv);
        });
    },
};

// Event Listener for Adding Tasks
document.querySelector(".add-task-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission
    const taskName = document.getElementById("task-name").value;
    const dueDate = document.getElementById("due-date").value;
    if (taskName && dueDate) {
        taskManager.addTask(taskName, dueDate);
        this.reset(); // Clear form inputs
    }
});
