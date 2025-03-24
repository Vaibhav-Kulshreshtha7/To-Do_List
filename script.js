const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === "") {
        alert("Please enter a task.");
    } else {
        let li = document.createElement("li");
        li.className = "task";
        let p = document.createElement("p");
        p.innerHTML = inputBox.value;
        li.appendChild(p);
        listContainer.appendChild(li);
        let span_edit = document.createElement("span");
        span_edit.className = "edit";
        span_edit.innerHTML = "&#x270E;";
        li.appendChild(span_edit);
        let span = document.createElement("span");
        span.className = "close";
        span.innerHTML = "&times;";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.className === "edit") {
        let li = e.target.parentElement;
        let p = li.querySelector("p");
        let input = document.createElement("input");
        input.type = "text";
        input.value = p.textContent;
        li.innerHTML = "";
        li.appendChild(input);
        let span_save = document.createElement("span");
        span_save.className = "save";
        span_save.innerHTML = "&#x2714;";
        li.appendChild(span_save);
        let span = document.createElement("span");
        span.className = "close";
        span.innerHTML = "&times;";
        li.appendChild(span);
    } else if (e.target.className === "save") {
        let li = e.target.parentElement;
        let input = li.firstChild;
        let p = document.createElement("p");
        p.innerHTML = input.value;
        li.innerHTML = "";
        li.appendChild(p);
        let span_edit = document.createElement("span");
        span_edit.className = "edit";
        span_edit.innerHTML = "&#x270E;";
        li.appendChild(span_edit);
        let span = document.createElement("span");
        span.className = "close";
        span.innerHTML = "&times;";
        li.appendChild(span);
        saveData();
    } else if (e.target.className === "close") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function loadData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

loadData();
