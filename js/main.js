
var taskNameInput = document.getElementById('task');
var submitBtn = document.getElementById('btnSubmit')
var updateBtn = document.getElementById('btnUpdate')

var indexUpdate = 0;
var ToDoListArray = [];

if (localStorage.getItem('task') != null) {
    ToDoListArray = JSON.parse(localStorage.getItem('task'));
    displaySites()
}



function createSite() {

    let taskObj = {
        name: taskNameInput.value,
    }
    console.log(taskObj);

    ToDoListArray.push(taskObj)


    displaySites()
    clearForm()

    localStorage.setItem('task', JSON.stringify(ToDoListArray))


}


function clearForm() {

    taskNameInput.value = ""

}

function displaySites() {

    var cartona = ``

    for (var i = 0; i < ToDoListArray.length; i++) {
        console.log(ToDoListArray[i].name);
        cartona = cartona + `
        <tr>
        <td> ${i} </td>
        <td> ${ToDoListArray[i].name} </td>
        <td><button onclick="deletedEelemnt(${i})" class="btn btn-outline-danger">Delete</button></td>
        <td><button onclick="takeUpdateElement(${i})" class="btn btn-warning"> update </button>
        </tr>        
        `
    }

    document.getElementById('tbody').innerHTML = cartona;
}

function deletedEelemnt(index) {

    ToDoListArray.splice(index, 1);

    localStorage.setItem('task', JSON.stringify(ToDoListArray))

    displaySites()
}

function takeUpdateElement(index) {
    // console.log('update made')

    indexUpdate = index;

    taskNameInput.value = ToDoListArray[index].name

    updateBtn.classList.remove('d-none')
    submitBtn.classList.add('d-none')

}

function updateElement() {

    taskObj = {
        name: taskNameInput.value,
    }

    ToDoListArray.splice(indexUpdate, 1, taskObj)

    localStorage.setItem('task', JSON.stringify(ToDoListArray))
    displaySites()

    updateBtn.classList.add('d-none')
    submitBtn.classList.remove('d-none')
    clearForm()


}

