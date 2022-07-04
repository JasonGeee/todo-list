function taskPopup() {
    const taskBtn = document.getElementById('createTaskBtn');
    const taskPopup = document.querySelector('.task-popup');
    const addTaskBtn = document.getElementById('addTask');
    const cancelTaskBtn = document.getElementById('cancelTask');


    taskBtn.addEventListener('click', () => {
        console.log('calling from taskPopup function');
        taskPopup.removeAttribute('style');
    });

    cancelTaskBtn.addEventListener('click', () => {
        taskPopup.style.display = 'none';
    });
}

function createProject() {
    const projectBtn = document.getElementById('projectBtn');
    const projectPopup = document.querySelector('.project-popup');
    const addBtn = document.getElementById('addProject');
    const cancelBtn = document.getElementById('cancelProject');

    projectBtn.addEventListener('click', (e) => {
        console.log('from createproject function');
        console.log(e.target);
        projectPopup.removeAttribute('style');
    });

    cancelBtn.addEventListener('click', () => {
        projectPopup.style.display = 'none';
    });
}

export {createProject, taskPopup};