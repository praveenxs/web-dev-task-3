document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const selectAllCheckbox = document.getElementById('selectAll');
    const deleteSelectedBtn = document.getElementById('deleteSelected');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', function(event) {
        if (event.target.matches('.delete')) {
            event.target.parentElement.remove();
            checkSelectAll();
        }
    });

    selectAllCheckbox.addEventListener('change', function() {
        const checkboxes = document.querySelectorAll('.task input[type="checkbox"]');
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = selectAllCheckbox.checked;
        });
    });

    deleteSelectedBtn.addEventListener('click', function() {
        const checkboxes = document.querySelectorAll('.task input[type="checkbox"]:checked');
        checkboxes.forEach(function(checkbox) {
            checkbox.parentElement.remove();
        });
        checkSelectAll();
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task';
        taskItem.innerHTML = `
            <input type="checkbox">
            <span>${taskText}</span>
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(taskItem);
        checkSelectAll();
    }

    function checkSelectAll() {
        const checkboxes = document.querySelectorAll('.task input[type="checkbox"]');
        const checkedCheckboxes = document.querySelectorAll('.task input[type="checkbox"]:checked');
        selectAllCheckbox.checked = checkboxes.length === checkedCheckboxes.length && checkboxes.length > 0;
    }
});
