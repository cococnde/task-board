// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId")) || 1;

// Todo: create a function to generate a unique task id
function generateTaskId() {
    return nextId++;

}

// Function to save tasks and nextId to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(taskList));
    localStorage.setItem("nextId", JSON.stringify(nextId));
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    let taskCard = {
        id: generateTaskId(),
        title: task.title,
        description: task.description,
    };
    
    //add the task to the task list
    taskList.push(taskCard);

    //save the task list to local storage
    saveTasks();

    return taskCard;

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    //clear the task list
    $('#task-list').empty();

//loop through the taskList & create a card for each task
for (let i = 0; i< taskList.length; i++) {
    let taskCard = createTaskCard(taskList[i]);

    //create a new div element for each task
    let taskCardElement = $('<div></div>')
    .attr('id', taskCard.id)
    .addClass('task-card')
    .text(taskCard.title + ' : ' + taskCard.description);

    //append task card to the task list
    $('#task-list').append(taskCardElement);

    //make the take card draggable
    $('#' + taskCard.id).draggable({
        revert: 'invalid',
    });
}

}

//render the task list
renderTaskList();

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    //prevent the default behavior of the form
    event.preventDefault();

    //get the values from the form
    let title = $('#title').val();
    let taskDescription = $('#task-description').val();

    //create a new task object
    let newTask = {
        title: taskTitle,
        description: taskDescription
    };

    //create a task card and add it to the task list
    let taskCard = createTaskCard(newTask);

    //save task to local storage
    saveTasks();

    //render the updated task list
    renderTaskList();

    //clear input fields
    $('#task-title').val('');
    $('#task-description').val('');

}
//add event listener for the add task button
$('#add-task-button').on('click', handleAddTask);

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
