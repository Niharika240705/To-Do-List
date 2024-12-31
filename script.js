const taskList = document.getElementById('task-list');
const modal = document.getElementById('add-task-modal');
const overlay = document.getElementById('overlay');

function toggleModal() {
  modal.style.display = 'block';
  overlay.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
  overlay.style.display = 'none';
}

function saveTask() {
  const title = document.getElementById('task-title').value;
  const desc = document.getElementById('task-desc').value;
  const dueDate = document.getElementById('due-date').value;
  const priority = document.getElementById('priority').value;

  const taskCard = document.createElement('li');
  taskCard.className = 'task-card';

  taskCard.innerHTML = `
    <span>${title} (Priority: ${priority})</span>
    <div class="actions">
      <button class="edit" onclick="editTask(this)">Edit</button>
      <button class="delete" onclick="deleteTask(this)">Delete</button>
      <button class="complete" onclick="completeTask(this)">Mark Complete</button>
    </div>
  `;

  taskList.appendChild(taskCard);
  closeModal();
}

function editTask(button) {
  // Logic for editing tasks
}

function deleteTask(button) {
  const taskCard = button.parentElement.parentElement;
  taskList.removeChild(taskCard);
}

function completeTask(button) {
  const taskCard = button.parentElement.parentElement;
  taskCard.style.textDecoration = 'line-through';
}
