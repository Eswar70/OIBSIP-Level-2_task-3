let inputBox = document.getElementById('inputBox');
let listContainer = document.getElementById('listContainer');
let addTask = document.getElementById('addTask');

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}

function getData(){
    listContainer.innerHTML = localStorage.getItem('data');
}
getData();

addTask.onclick = function() {
    if (inputBox.value === '') {
        alert('Enter the Task');
        return alert;
    } else {
        let listEl = document.createElement('li');
        listEl.innerHTML = inputBox.value;
        listContainer.appendChild(listEl);
        
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        listEl.appendChild(span);
    }
    saveData();
    inputBox.value = '';
};

listContainer.addEventListener('click', function(e){
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);











