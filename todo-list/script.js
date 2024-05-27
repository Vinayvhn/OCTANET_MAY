document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', addTask);

    function addTask(e) {
        e.preventDefault();

        const taskInput = document.getElementById('task-input').value;
        const dueDate = document.getElementById('due-date').value;
        const priority = document.getElementById('priority').value;
        const category = document.getElementById('category').value;

        const li = document.createElement('li');
        li.className = priority;
        li.innerHTML = `
            <span>${taskInput} (${category}) - ${dueDate}</span>
            <div class="actions">
                <button class="complete-btn">✓</button>
                <button class="delete-btn">✗</button>
            </div>
        `;

        taskList.appendChild(li);

        document.getElementById('task-form').reset();

        li.querySelector('.complete-btn').addEventListener('click', () => {
            li.classList.toggle('complete');
        });

        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
        });
    }
});
