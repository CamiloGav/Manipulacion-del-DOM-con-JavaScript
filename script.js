const btn = document.querySelector("[data-form-btn]");

// Arrow functions o funciones anonimas
const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement('li');
    task.classList.add("card");
    input.value = '';

    // backticks
    console.log(checkComplete());
    const taskContent = document.createElement('div');
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);

    const content = `
        <i class="fas fa-trash-alt trashIcon icon"></i>`;

    // task.innerHTML = content;

    //Aca terminaria la tarea *1
    task.appendChild(taskContent);
    list.appendChild(task);

    console.log(content); 
}

console.log(btn);

btn.addEventListener('click', createTask);

const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far","fa-check-square","icon");
    i.addEventListener('click', completeTask);
    return i;
}

const completeTask = () => {
    console.log('Complete Task')
}