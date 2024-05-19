document.addEventListener("DOMContentLoaded", function(){ 
    const loginForm =document.getElementById('loginForm'); 
    const todoForm=document.getElementById('todoForm'); 
    const todoList =document.getElementById('todolist'); 
    const logoutButton = document.getElementById('logoutButton');
loginForm.addEventListener('submit', function(e) {
     e.preventDefault();
      const username=document.getElementById('username').value;
      const password=document.getElementById('password').value;
todoForm.classList.remove('hidden');
todoList.classList.remove('hidden'); 
logoutButton.classList.remove('hidden');
loginForm.classList.add('hidden'); 
});
todoForm.addEventListener('submit', function(e) {
     e.preventDefault();
    const task = document.getElementById('task').value;
       const newTask = document.createElement('li'); 
       newTask.textContent = task;
todoList.appendChild(newTask);
document.getElementById('task').value=';'
});
logoutButton.addEventListener('click', function() { 
  todoForm.classList.add("hidden"); todoList.classList.add("hidden");
logoutButton.classList.add('hidden');
loginForm.classList.remove("hidden");
});
});
