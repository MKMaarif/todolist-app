// reference html element
const formTask = document.querySelector('.form-task');

// event listener di elemen form
formTask.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // reference html element input
    const inputForm = document.querySelector('.input-form');
    // console.log(inputForm.value);

    // reference html element ul
    const wrapperList = document.querySelector('.task-list-wrapper');

    // create document li
    const taskList = document.createElement('li');

    // masukkan input value ke li
    taskList.innerHTML = inputForm.value;
    
    // masukkan li ke ul
    wrapperList.append(taskList);

    // clear input value
    inputForm.value = '';
});