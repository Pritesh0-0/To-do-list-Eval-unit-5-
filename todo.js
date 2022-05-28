loadEvents();
function loadEvents() {
    document.querySelector('form').addEventListener('submit', submit);

    document.querySelector('ul').addEventListener('click', deleteOrTick);

}
function submit(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '')
        addTask(input.value);
    input.value = '';
}


function addTask(task) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<input type="checkbox" class="check"><label>${task}</label><span class="remove">Delete</span>`;
    ul.appendChild(li);
    document.querySelector('.list').style.display = 'block';
}


function deleteOrTick(e) {
    if (e.target.className == 'remove')
        deleteTask(e);
    else {
        tickTask(e);
    }
}


function deleteTask(e) {
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
}


function tickTask(e) {
    const task = e.target.nextSibling;
    if (e.target.checked) {
        task.style.textDecoration = "line-through";
    } else {
        task.style.textDecoration = "none";
        task.style.color = "FFFFFF";
    }
}