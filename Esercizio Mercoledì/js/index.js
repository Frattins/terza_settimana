
document.getElementById("button").addEventListener("click", function() {
    const inputText = document.querySelector("input[type='text']").value.trim();
    if (inputText !== "") {
        const taskList = document.getElementById("tasks");
        const taskItem = document.createElement("div");
        taskItem.classList.add("task"); 
        taskItem.innerHTML = `
            <ul>
                <li>${inputText}<button class="delete"><i class="far fa-trash-alt"></i>
            </button></li>
            <ul>
           `;
        taskList.appendChild(taskItem);
        document.querySelector("input[type='text']").value = "";
    }
});

