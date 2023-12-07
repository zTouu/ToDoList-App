const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // close icon (X) that use to remove task
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); //mouse click event and catch Li value
        saveData();
    }
    else if(e.target.tagName === "SPAN"){ //mouse click event and catch Span value
        e.target.parentElement.remove();  /* to delete task */
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){ /* to keep all tasks the same even refreshed the web page */
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();