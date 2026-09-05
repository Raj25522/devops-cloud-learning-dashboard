const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

loadTasks();

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        addTask();
    }
});

function addTask(){

    const text = taskInput.value.trim();

    if(text === ""){
        return;
    }

    const task = {
        text,
        completed:false
    };

    createTask(task);

    saveTask(task);

    taskInput.value="";
}

function createTask(task){

    const li = document.createElement("li");

    li.innerHTML = `
        <span class="task-text ${task.completed ? 'completed':''}">
            ${task.text}
        </span>

        <div>
            <button class="complete-btn">✓</button>
            <button class="delete-btn">✕</button>
        </div>
    `;

    taskList.appendChild(li);

    const completeBtn = li.querySelector(".complete-btn");
    const deleteBtn = li.querySelector(".delete-btn");
    const taskText = li.querySelector(".task-text");

    completeBtn.addEventListener("click",()=>{

        taskText.classList.toggle("completed");

        updateStorage();
    });

    deleteBtn.addEventListener("click",()=>{

        li.remove();

        updateStorage();
    });
}

function saveTask(task){

    const tasks =
        JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(task);

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}

function updateStorage(){

    const tasks = [];

    document.querySelectorAll("#taskList li")
        .forEach(li=>{

        tasks.push({
            text:li.querySelector(".task-text").innerText,
            completed:li.querySelector(".task-text")
            .classList.contains("completed")
        });

    });

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}

function loadTasks(){

    const tasks =
        JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task=>{
        createTask(task);
    });
}