let isVisible = true; // global variable to track visibility
let tasks = [];       // global array to hold all tasks

function toggleVisibility() {
    if (isVisible) {
        $("#taskDisplayArea").fadeOut();   // hide the task display area
        isVisible = false;                 // update the visibility state
    } else {
        $("#taskDisplayArea").fadeIn();    // show the task display area
        isVisible = true;                  // update the visibility state
    }
}

function saveTask() {
    // get the values of the inputs
    const title = $("#txtTitle").val();
    const desc = $("#txtDescription").val();
    const color = $("#txtColor").val();
    const date = $("#txtStartDate").val();
    const status = $("#selStatus").val();
    const budget = $("#txtBudget").val();
    const isImportant = $("#isImportant").is(":checked"); // checkbox

    // Basic validation
    if (!title.trim()) {
        alert("Please enter a task title");
        return;
    }

    // create a new task object
    let taskToSave = new Task(isImportant, title, desc, color, date, status, budget);

    // add the task to the array
    tasks.push(taskToSave);

    // display it in the pending list
    displayTask(taskToSave);

    // clear form after saving
    clearForm();

    // for testing
    console.log("Task saved:", taskToSave);
    console.log("All tasks:", tasks);
}

function displayTask(task) {
    // Use template literals to build the HTML with styling
    let syntax = `
        <div class="task-card" style="background: linear-gradient(135deg, ${task.color}88, ${task.color}bb);">
            <button class="task-details-btn" onclick="toggleTaskDetails(this)">SHOW/HIDE DETAILS</button>
            <h3>${task.title}</h3>
            <div class="task-details" style="display: none;">
                <p><strong>Description:</strong> ${task.desc || 'No description'}</p>
                <p><strong>Status:</strong> ${task.status}</p>
                <p><strong>Start Date:</strong> ${formatDate(task.date)}</p>
                <p><strong>Budget:</strong> $${task.budget || 'N/A'}</p>
                <p><strong>Important:</strong> ${task.isImportant ? 'Yes ⭐' : 'No'}</p>
            </div>
        </div>
    `;

    // Use jQuery to append the new HTML to our container
    $("#pendingList").append(syntax);
}

function toggleTaskDetails(button) {
    const taskCard = $(button).closest('.task-card');
    const details = taskCard.find('.task-details');
    
    if (details.is(':visible')) {
        details.slideUp(300);
        $(button).text('SHOW DETAILS');
    } else {
        details.slideDown(300);
        $(button).text('HIDE DETAILS');
    }
}

function clearForm() {
    $("#txtTitle").val('');
    $("#txtDescription").val('');
    $("#txtColor").val('#000000');
    $("#txtStartDate").val('');
    $("#selStatus").val('In progress');
    $("#txtBudget").val('');
    $("#isImportant").prop('checked', false);
    
    // Set current date/time
    initializeDateTime();
}

function formatDate(dateString) {
    if (!dateString) return 'Not set';
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}

function initializeDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    const dateTimeString = `${year}-${month}-${day}T${hours}:${minutes}`;
    $("#txtStartDate").val(dateTimeString);
}

function init() {
    console.log("Task Manager initialized");
    
    // Initialize with current date/time
    initializeDateTime();
    
    // hooks - event listeners
    $("#btnAdd").click(saveTask);
    $("#btnDetails").click(toggleVisibility);
    
    // Handle form submission with Enter key
    $("#taskForm").on('submit', function(e) {
        e.preventDefault();
        saveTask();
    });
    
    // Budget dropdown functionality (placeholder)
    $(".budget-dropdown").click(function() {
        console.log('Budget dropdown clicked - implement currency selection here');
    });
}

// waits until the html and css finish to run
window.onload = init;